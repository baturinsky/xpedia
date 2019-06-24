<script>
  import { rul } from "./Ruleset";
  import Illustration from './Illustration.svelte';
  import Item from './Item.svelte';
  import Armor from './Armor.svelte';
  import Section from './Section.svelte';

  export let article
  export let query
  let textwithHighlights

  $:{
    textwithHighlights = article.text || ""
    if(query) {
      for(let word of query.split()){            
        let regEx = new RegExp(word, "ig");
        textwithHighlights = textwithHighlights.replace(regEx, "<span class='queried'>$&</span>")
      }
    }
  }

</script>

<style>
.article-title{
  padding: 5px 0px 5px 0px;
  font-size: larger;
  font-weight: bold;
}

.article-text{
  padding: 5px 0px 5px 0px;
}
</style>

<svelte:head><title>{article.title}</title></svelte:head>

<div class="article-title">{article.title}</div>

<Illustration id={article.image_id}/>

<div class="article-text">
  {@html textwithHighlights}
</div>

{#if article.id in rul.items}
  <Item item={rul.items[article.id]}/>
{/if}

{#if article.id in rul.armors}
  <Armor armor={rul.armors[article.id]}/>
{/if}  

{#if article.type_id == -1}
  <Section section={rul.sections[article.id.substr(6)]}/>
{/if}
