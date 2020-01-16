<script>
  import { rul } from "./Ruleset";
  import BaseServiceList from "./BaseServiceList.svelte";
  import { Link, Intro, LinksPage, Value } from "./Components";
  import TableKey from "./TableKey.svelte"

  export let craft;

  $: {
    console.info(craft);
  }
</script>

<table class="main-table">
  <tr>
    <td colspan="2" class="table-header">{rul.str('Craft')}</td>
  </tr>
  {#each Object.entries(craft).sort((a, b) =>
    a[0] > b[0] ? 1 : -1
  ) as [key, prop]}
    {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
      <tr>
        <TableKey key={key}/>
        <td>
          {#if ['weaponStrings'].includes(key)}
            <Value
              val={prop.map(slot => rul.str(slot).replace('>{ALT}{0}', ''))} />
          {:else if ['sprite'].includes(key)}
            <img
              class="craft sprite"
              onerror="this.onerror=null; this.src='xpedia/0.png'"
              alt="X"
              src={rul.specialSprite('baseSprite', prop * 1 + 33)} />
          {:else if ['requiresBaseFunc'].includes(key)}
            <BaseServiceList items={prop} vertical={true} />
          {:else}
            <Value val={prop} />
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
