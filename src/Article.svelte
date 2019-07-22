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
  import Conditions from "./Conditions.svelte";
  import LinksList from "./LinksList.svelte";
  import Ufo from "./Ufo.svelte";
  import Facility from "./Facility.svelte";
  import BaseService from "./BaseService.svelte";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte"
  import BASE_FUNC from "./BaseServices.svelte";

  export let article;
  export let query;
  let textwithHighlights;
  let other = false;

  $: {
    textwithHighlights = article.text || "";

    other = article.type_id == "OTHER" ? {BASE_FUNC}[article.id] : false;

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
</style>

<svelte:head>
  <title>{article.title || 'XPedia'}</title>
</svelte:head>

<h1>{article.title || article.id}</h1>

{#if !(article.id in rul.units)}
  <Illustration id={article.image_id} />
{/if}

<div class="article-text">
  {@html textwithHighlights}
</div>

{#if article.id == 'SERVICES'}
  <BASE_FUNC />
{:else if article.type_id == 'CONDITIONS'}
  <Conditions conditions={rul.startingConditions[article.id]} />
{:else if article.type_id == 'CATEGORIES'}
  <LinksList links={rul.categories[article.id]} />
{:else if article.type_id == 'PEDIA' || article.type_id == 'TYPE'}
  <LinksList links={rul.sections[article.id].articles.map(a => a.id)} />
{/if}

<div class="flex-horisontal">
  <svelte:component this={other} {query}/>

  <div class="flex-vertical">
  <table class="main-table">
    {#if article.id in rul.units}
      <Unit unit={rul.units[article.id]} />
    {/if}

    {#if article.id in rul.items}
      <Item item={rul.items[article.id]} />
    {/if}
    </table>
  </div>

  {#if article.id in rul.armors}
    <Armor armor={rul.armors[article.id]} />
  {:else if article.id in rul.units && rul.units[article.id].armor}
    <Armor armor={rul.armors[rul.units[article.id].armor]} />
  {/if}

  {#if article.id in rul.baseServices}
    <BaseService service={rul.baseServices[article.id]} />
  {/if}

  {#if article.id in rul.crafts}
    <Craft craft={rul.crafts[article.id]} />
  {/if}

  {#if article.id in rul.craftWeapons}
    <CraftWeapon weapon={rul.craftWeapons[article.id]} />
  {/if}

  {#if article.id in rul.ufos}
    <Ufo ufo={rul.ufos[article.id]} />
  {/if}

  {#if article.id in rul.facilities}
    <Facility facility={rul.facilities[article.id]} />
  {/if}

  <div class="flex-vertical">
    <table class="main-table">
      {#if article.id in rul.manufacture}
        <Manufacture manufacture={rul.manufacture[article.id]} />
      {/if}

      {#if article.id in rul.research}
        <Research research={rul.research[article.id]} />
      {/if}

      <!--{#each article.lookup as researchId}
        <Research research={rul.research[researchId]} title={researchId} />
      {/each}-->
    </table>
  </div>

</div>
