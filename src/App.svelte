<script>
  import { Button } from "svelma";
  import { tick, afterUpdate } from "svelte";
  import { rul } from "./Ruleset";
  import Article from "./Article.svelte";

  export let source

  let article = null;
  let found = null;
  let query = "";
  let currentSection = null;
  let activeOption;
  let ignoreNextAutoscroll = false;
  let mode = ""

  async function loadRules(){
    await rul.load(source)
  }

  let rulesLoaded = loadRules();

  function goTo(id) {
    window.location.hash = "#" + id;
  }

  function checkHash() {
    let hash = document.location.hash;
    let first_ = hash.indexOf('_')
    if(first_ == -1)
      return;
    mode = hash.substr(1, first_ - 1)
    /*console.log(mode);
    debugger;*/
    if (hash) {
      if (mode == "PEDIA") {
        selectSection(hash.substr(7));
        article = rul.article(hash.substr(1));
      } else if (mode == "CATEGORY") {
        article = rul.article(hash.substr(1));
      } else if (mode == "CONDITIONS") {
        article = rul.article(hash.substr(1));
      } else if (mode == "SEARCH") {
        query = hash.substr(8);
        query = query.replace("%20", " ");

        found = rul.search.findArticles(query);        

        article = null;
      } else {
        found = null;
        let id = hash.substr(1);
        if (!article || article.id != id) article = rul.article(id);
      }
    }

    if (article) {
      if (article.section && currentSection != article.section)
        currentSection = article.section;
    }
  }

  function nextArticle(delta) {
    let nextArticle = rul.findNextArticle(article, delta);
    if (nextArticle) {
      goTo(nextArticle.id);
    }
  }

  document.addEventListener("keydown", event => {
    const keyName = event.key;
    if (keyName == "ArrowRight") nextArticle(1);
    if (keyName == "ArrowLeft") nextArticle(-1);
  });

  function searchKeyUp(e) {
    if (e.key == "Enter") {
      goTo("SEARCH_" + e.target.value);
    }
  }

  function selectSection(id) {
    currentSection = rul.sections[id];
  }

  window.onhashchange = checkHash;

  rulesLoaded.then(checkHash);

  afterUpdate(() => {
    if(activeOption){
      tick().then( () => activeOption.scrollIntoView({behavior:'auto', block:'center'}) )
    }
  })

  $:{
    if(article)
      console.info(article);
  }
</script>

<style>
  .sidebar {
    height: 95%;
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .narrow {
    max-width: 800px;
  }
  .menu-list a:visited {
    color: white;
  }
  .active-article-option {
    background: #584C64;
  }

  .centered {
   position: fixed;
   top: 50%;
   left: 50%;
   width: 100px;
   height: 100px;
   margin-top: -50px; /* Half the height */
   margin-left: -50px; /* Half the width */
  }  

</style>

<svelte:head>{#if !article}<title>XPedia</title>{/if}</svelte:head>

{#await rulesLoaded}
<img class="centered" alt="Loading rules..." src="xpedia/spinner.svg"/>
{:then}

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">

  <div id="navbar" class="navbar-menu brighter">

    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a href={"#PEDIA_" + (currentSection?currentSection.id:"MAIN")} class="navbar-link">
          <img src="xpedia/favicon.png" alt="favicon" />
           {rul.modName} XPedia {currentSection?": " + currentSection.title : ""}
        </a>
        <div class="navbar-dropdown">
          <div style="display:flex">
            <div>
              {#each rul.sectionsOrder as section}
                <a class="navbar-item" href={'#PEDIA_' + section.id}>
                  {section.title}
                </a>
              {/each}
            </div>
            <div>
              {#each rul.typeSectionsOrder as section}
                <a class="navbar-item" href={'#PEDIA_' + section.id}>
                  {section.title}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <input
          class="input is-primary"
          bind:value={query}
          on:keyup={searchKeyUp}
          style="width:500px; background:black; color:white;"
          type="text"
          placeholder="Search query" />
      </div>
    </div>
  </div>
</nav>

<div class="columns is-fullheight" style="height:100%;">
  <div class="column is-2 is-sidebar-menu is-hidden-mobile sidebar padding-top">
    {#each (article && article.section && article.section.isType())?rul.typeSectionsOrder:rul.sectionsOrder as section}
      {#if !currentSection || section.id == currentSection.id}
        <p class="menu-label">{section.title}</p>
        <ul class="menu-list">
          {#each section.articles as option}
            <li>
              {#if article && article.id == option.id}
                <a
                  href={'#' + option.id}
                  class="active-article-option"
                  bind:this={activeOption}>                  
                  {option.title}
                </a>
              {:else}
                <a href={'#' + option.id} on:click={() => ignoreNextAutoscroll = true}>{option.title} </a>
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    {/each}
  </div>
  <div class="column is-2" />
  <div class="column is-main-content main padding-top">

    {#if article}
      <Article {article} {query} />
    {/if}

    {#if found}
      <ul>
        {#each found as option}
          <li>
            <a href={'#' + option.id}>{option.title}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

{/await}