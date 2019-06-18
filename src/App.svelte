<script>
  import { Button } from 'svelma';
  import { rul } from './Ruleset';
  import Article from './Article.svelte'

  let article = null;
  let found = null;
  let query = "";
  let currentSection = null;

  function goTo(id) {
    window.location.hash = "#" + id;
  }

  function checkHash() {
    let hash = document.location.hash;
    if (hash) {
      if (hash.substr(0, 8) == "#search:") {
        query = hash.substr(8);
        query = query.replace("%20", " ");

        found = rul.search.findArticles(query);

        article = null;
      } else {
        found = null;
        let id = hash.substr(1);
        if (!article || article.id != id) article = rul.articlesById[id];
      }
    }
    console.log(article)
    if(article){
      if(article.section)
        currentSection = article.section
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
      console.log(e.target.value);
      goTo("search:" + e.target.value);
    }
  }

  function selectSection(id){
    currentSection = rul.sections[id]
  }

  window.onhashchange = checkHash;

  checkHash();
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
  .menu-list a:visited{
    color:white;
  }
</style>

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">

  <div id="navbar" class="navbar-menu">
    
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">{rul.modName} Pedia{currentSection?": " + currentSection.title:""} </a>
        <div class="navbar-dropdown">
          {#each rul.sectionsOrder as section}
            <a class="navbar-item" on:click={e => selectSection(section.id)}>
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
          value={query}
          on:keyup={searchKeyUp}
          style="width:500px; background:black; color:white;"
          type="text"
          placeholder="Search query" />
      </div>
    </div>
  </div>
</nav>

<div class="columns is-fullheight" style="height:100%;:black;">
  <div class="column is-2 is-sidebar-menu is-hidden-mobile sidebar">
    {#each rul.sectionsOrder as section}
      {#if !currentSection || section.id == currentSection.id}
        <p class="menu-label">{section.title}</p>
        <ul class="menu-list">
          {#each section.articles as option}
            <li>
              <a
                href={'#' + option.id}
                class={!article || article.id != option.id ? '' : 'is-active'}>
                {option.title}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    {/each}
  </div>
  <div class="column is-2" />
  <div class="column is-main-content main">
    
    {#if article}
      <Article article={article}/>
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
