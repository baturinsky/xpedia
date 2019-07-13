<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte"
  import BaseServiceList from "./BaseServiceList.svelte"
  import Illustration from "./Illustration.svelte";
  import SpecialBonus from "./SpecialBonus.svelte"

  export let facility;

  $: {console.info(facility)}

</script>

<table class="main-table">
  <tr> <td colspan="2" class="table-header">Craft</td> </tr>
  {#each Object.entries(facility).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(prop[0])}
      <tr>
        <td class="padding-right">{@html rul.decamelize(prop[0])}</td>
        <td>
          {#if ['buildCostItems'].includes(prop[0])}
            {#each Object.keys(prop[1]).sort() as field, i}
              {#if i != 0}<br/> {/if}
              <Link href={field}/>: {prop[1][field].build} / {prop[1][field].refund}
            {/each}            
          {:else if ['requires', 'leavesBehindOnSell', 'destroyedFacility' ].includes(prop[0])}
            <ItemList items={prop[1]} vertical={true}/>
          {:else if ['provideBaseFunc', 'requiresBaseFunc', 'forbiddenBaseFunc' ].includes(prop[0])}
            <BaseServiceList items={prop[1]} vertical={true}/>
          {:else if ['spriteFacility'].includes(prop[0])}
            <img class="sprite" alt='X' src={rul.specialSprite("baseSprite", prop[1]*1 + 33)}/>
          {:else if prop[1] instanceof Object}
            {#each Object.keys(prop[1]).sort() as field, i}
              {#if i != 0}, {/if}
              {@html rul.decamelize(field)}: {@html rul.decamelize(prop[1][field])}
            {/each}
          {:else}
            {prop[1]}
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>