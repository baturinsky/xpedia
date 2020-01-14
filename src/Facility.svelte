<script>
  import { rul } from "./Ruleset";
  import BaseServiceList from "./BaseServiceList.svelte";
  import SpecialBonus from "./SpecialBonus.svelte";

  import { Link, LinksPage, Value, LinksList } from "./Components";

  export let facility;
  let seeStorageTiles = false;
  let size = 1;

  $: {
    size = facility.size || 1;
    console.log(size);
    console.info(facility);
  }
</script>

<style>
  .dropdown-content {
    background: black;
    padding: 5px;
  }
</style>

<table class="main-table">
  <tr>
    <td colspan="2" class="table-header">{rul.str('Facility')}</td>
  </tr>
  {#each Object.entries(facility).sort((a, b) =>
    a[0] > b[0] && a[0] != 'storageTiles' ? 1 : -1
  ) as [key, prop]}
    {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
      <tr>
        <td class="padding-right">
          {@html rul.decamelize(key)}
        </td>
        <td>
          {#if ['buildCostItems'].includes(key)}
            {#each Object.keys(prop).sort() as field, i}
              {#if i != 0}
                <br />
              {/if}
              <Link href={field} />
              : {prop[field].build} / {prop[field].refund}
            {/each}
          {:else if ['storageTiles'].includes(key)}
            <div>
              <div>
                <button
                  class="button"
                  on:click={e => (seeStorageTiles = !seeStorageTiles)}>
                  Expand
                </button>
              </div>
              <div>
                {#if seeStorageTiles}
                  <div style="columns:6">
                    <LinksList items={prop} vertical={true} />
                  </div>
                {/if}
              </div>
            </div>
          {:else if ['provideBaseFunc', 'requiresBaseFunc', 'forbiddenBaseFunc'].includes(key)}
            <BaseServiceList items={prop} vertical={true} />
          {:else if ['spriteFacility', 'spriteShape'].includes(key)}
            <div class="tight" style="columns:{size};width:{32 * size}px;">
              {#each { length: size } as _, y}
                {#each { length: size } as _, x}
                  <img
                    class="sprite"
                    onerror="this.onerror=null; this.src='xpedia/0.jpg'"
                    alt="X"
                    src={rul.specialSprite('baseSprite', prop * 1 + x * size + y)} />
                {/each}
              {/each}
            </div>
          {:else}
            <Value val={prop} />
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
