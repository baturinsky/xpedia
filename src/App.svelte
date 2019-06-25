<script>
  import { Button } from "svelma";
  import { tick, afterUpdate } from "svelte";
  import { rul } from "./Ruleset";
  import Article from "./Article.svelte";

  let article = null;
  let found = null;
  let query = "";
  let currentSection = null;
  let activeOption;
  let ignoreNextAutoscroll = false;

  function goTo(id) {
    window.location.hash = "#" + id;
  }

  function checkHash() {
    let hash = document.location.hash;
    if (hash) {
      if (hash.substr(0, 7) == "#PEDIA_") {
        selectSection(hash.substr(7));
        article = rul.article(hash.substr(1));
      } else if (hash.substr(0, 8) == "#search:") {
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
      goTo("search:" + e.target.value);
    }
  }

  function selectSection(id) {
    currentSection = rul.sections[id];
  }

  window.onhashchange = checkHash;

  checkHash();

  afterUpdate(() => {
    if(activeOption){
      tick().then( () => activeOption.scrollIntoView({behavior:'auto', block:'center'}) )
    }
  })

  $:{
    console.log(article);
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
</style>

<svelte:head>{#if !article}<title>XPedia</title>{/if}</svelte:head>

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">

  <div id="navbar" class="navbar-menu brighter">

    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a href={"#PEDIA_" + (currentSection?currentSection.id:"MAIN")} class="navbar-link">
          <img src="xpedia/favicon.png" alt="favicon" />
           {rul.modName} XPedia {currentSection?": " + currentSection.title : ""}
        </a>
        <div class="navbar-dropdown">
          {#each rul.sectionsOrder as section}
            <a class="navbar-item" href={'#PEDIA_' + section.id}>
               {section.title}
            </a>
          {/each}
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

<div class="columns is-fullheight" style="height:100%;:black;">
  <div class="column is-2 is-sidebar-menu is-hidden-mobile sidebar padding-top">
    {#each rul.sectionsOrder as section}
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
