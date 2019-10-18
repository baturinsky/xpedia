<script>
  import { tick, afterUpdate } from "svelte";
  import { rul } from "./Ruleset";
  import { Link, Intro, LinksPage, Value, LinksList } from "./Components";
  import Article from "./Article.svelte";

  export let source;

  let article = null;
  let found = null;
  let query = "";
  let currentSection = null;
  let activeOption;
  let ignoreNextAutoscroll = false;
  let id = "";
  let searchDelayHandle = null;

  async function loadRules() {
    await rul.load(source);
  }

  let rulesLoaded = loadRules();

  function goTo(id) {
    window.location.hash = "#" + id;
  }

  function checkHash() {
    let hash = document.location.hash.replace("%20", " ");
    if (hash) {
      let dd = hash.indexOf("::");
      if (dd != -1) {
        id = hash.substr(1, dd - 1);
        query = hash.substr(dd + 2);
      } else {
        id = hash.substr(1);
      }

      if (id == "SEARCH") {
        if (query.length >= 2)
          found = rul.search.findArticles(query).map(a => a.id);
        else found = 0;
        article = null;
      } else {
        found = null;
        if (!article || article.id != id) article = rul.article(id);
      }

      console.log(id);
      console.log(article);
    }

    if (article) {
      if (article.section && currentSection != article.section)
        currentSection = article.section;
    } else {
      currentSection = null;
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
    if (searchDelayHandle) clearTimeout(searchDelayHandle);

    searchDelayHandle = setTimeout(
      () => {
        goTo("SEARCH::" + e.target.value);
        searchDelayHandle = null;
      },
      e.key == "Enter" ? 10 : 1000
    );
  }

  function selectSection(id) {
    currentSection = rul.sections[id];
  }

  window.onhashchange = checkHash;

  rulesLoaded.then(checkHash);

  afterUpdate(() => {
    if (activeOption) {
      tick().then(() =>
        activeOption.scrollIntoView({ behavior: "auto", block: "center" })
      );
    }
  });

  $: {
    console.info(article || "no article");
  }

  let sortArticles = false;

  $: sortedArticles = (articles) => sortArticles?articles.slice().sort((a,b) => a.title > b.title?1:-1):articles;
  
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
    background: #584c64;
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

<svelte:head>
  {#if !article}
    <title>XPedia</title>
  {/if}
</svelte:head>

{#await rulesLoaded}
  <img class="centered" alt="Loading rules..." src="xpedia/spinner.svg" />
{:then}

  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation">

    <div class="navbar-brand">
      <div class="navbar-item has-dropdown is-hoverable">
        <a href="#MAIN" class="navbar-link">
          <img src="xpedia/favicon.png" alt="favicon" />
          {rul.modName} XPedia
        </a>
        <div class="navbar-dropdown">
          <div style="display:flex">
            <div>
              {#each rul.sectionsOrder as section}
                <a class="navbar-item" href={'#' + section.id}>
                  {section.title}
                </a>
              {/each}
            </div>
            <div>
              {#each rul.typeSectionsOrder as section}
                <a class="navbar-item" href={'#' + section.id}>
                  {section.title}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-item">
        <a
          style="color:white"
          href={'#' + (currentSection ? currentSection.id : 'MAIN')}>
          {currentSection ? currentSection.title : ''}
        </a>
      </div>
      {#if article && !['TYPE', 'PEDIA'].includes(article.type_id)}
        <div class="navbar-item">
          <a
            style="color:white"
            href={'#' + article.id}
            on:click={e => window.scrollTo(0, 0)}>
            {article.title}
          </a>
        </div>
      {/if}

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field has-addons">
          <p class="control">
            <input
              class="input"
              type="text"
              bind:value={query}
              on:keyup={searchKeyUp}
              placeholder="Search..." />
          </p>
          <!--
          <p class="control">
            <button class="button">Search</button>
          </p>-->
        </div>

      </div>
    </div>
    
  </nav>

  <div class="columns is-fullheight">
    
    <div
      class="column is-2 is-sidebar-menu is-hidden-mobile sidebar padding-top">

      {#each article && article.section && article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder as section}
        {#if !currentSection || section.id == currentSection.id}
          <p class="menu-label">{section.title}</p>
          <ul class="menu-list">
            {#each sortedArticles(section.articles) as option}
              <li>
                {#if article && article.id == option.id}
                  <a
                    href={'#' + option.id}
                    class="active-article-option"
                    bind:this={activeOption}>
                    {option.title}
                  </a>
                {:else}
                  <a
                    href={'#' + option.id}
                    on:click={() => (ignoreNextAutoscroll = true)}>
                    {option.title}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
      {/each}
    </div>
    <div class="column is-2" />
    <div class="side-sort-button">
      <button style={sortArticles?"":"text-decoration:line-through"} on:click={e => sortArticles = !sortArticles}>A-Z</button>
    </div>

    <div class="column is-main-content main padding-top">

      {#if article}
        <Article {article} {query} />
      {:else if query}
        Searching "
        <em>{query}</em>
        ":
        <br />
        {#if found && found.length > 0}
          <LinksPage links={found} />
        {:else if query.length < 2}
          <i>Query too short</i>
        {:else if searchDelayHandle}
          ...
        {:else}
          <i>Nothing found</i>
        {/if}
      {:else if !query}
        <Intro />
      {/if}
    </div>
  </div>

{/await}
