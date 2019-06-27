<script>
  import { rul } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import Item from "./Item.svelte";
  import Armor from "./Armor.svelte";
  import Craft from "./Craft.svelte";
  import CraftWeapon from "./CraftWeapon.svelte";
  import Unit from "./Unit.svelte";
  import Research from "./Research.svelte";
  import Manufacture from "./Manufacture.svelte";
  import Section from "./Section.svelte";

  export let article;
  export let query;
  let textwithHighlights;

  $: {
    textwithHighlights = article.text || "";
    if (query) {
      for (let word of query.split()) {
        let regEx = new RegExp(word, "ig");
        textwithHighlights = textwithHighlights.replace(
          regEx,
          "<span class='queried'>$&</span>"
        );
      }
    }
  }
</script>

<style>
  .article-text {
    padding: 5px 0px 5px 0px;
  }
</style>

<svelte:head>
  <title>{article.title}</title>
</svelte:head>

<h1>{article.title || article.id}</h1>

{#if !(article.id in rul.units)}
  <Illustration id={article.image_id} />
{/if}

<div class="article-text">
  {@html textwithHighlights}
</div>

{#if article.type_id == -1}
  <Section section={rul.sections[article.id.substr(6)]} />
{/if}

<div class="flex-horisontal">
  <div>
    {#if article.id in rul.units}
      <Unit unit={rul.units[article.id]} />
    {/if}

    {#if article.id in rul.items}
      <Item item={rul.items[article.id]} />
    {/if}
  </div>

  {#if article.id in rul.armors}
    <Armor armor={rul.armors[article.id]} />
  {:else if article.id in rul.units && rul.units[article.id].armor}
    <Armor armor={rul.armors[rul.units[article.id].armor]} />
  {/if}

  {#if article.id in rul.crafts}
    <Craft craft={rul.crafts[article.id]} />
  {/if}

  {#if article.id in rul.craftWeapons}
    <CraftWeapon weapon={rul.craftWeapons[article.id]} />
  {/if}

  <div>
    {#if article.id in rul.manufacture}
      <Manufacture manufacture={rul.manufacture[article.id]} />
    {/if}

    {#if article.id in rul.research}
      <Research research={rul.research[article.id]} />
    {/if}
  </div>

</div>
