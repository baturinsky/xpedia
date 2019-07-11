<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte"
  import Illustration from "./Illustration.svelte";
  
  export let craft;

  $: {console.info(craft)}

</script>

<table class="main-table">
  <tr> <td colspan="2" class="table-header">Craft</td> </tr>
  {#each Object.entries(craft).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(prop[0])}
      <tr>
        <td class="padding-right">{@html rul.decamelize(prop[0])}</td>
        <td>
          {#if ['weaponStrings'].includes(prop[0])}
            {#each prop[1] as slot}
              {rul.str(slot).replace(">{ALT}{0}","")}; 
            {/each}            
          {:else if ['sprite'].includes(prop[0])}
            <img class="sprite" alt='X' src={rul.specialSprite("baseSprite", prop[1]*1 + 33)}/>
          {:else if ['requires'].includes(prop[0])}
            <ItemList items={prop[1]} vertical={true}/>
          {:else if ['startingConditions'].includes(prop[0])}
            <ItemList items={prop[1].map(a => 'CONDITIONS_' + a)} vertical={true}/>
          {:else if ['refuelItem'].includes(prop[0])}
            <Link href={prop[1]}/>
          {:else if ['weaponTypes'].includes(prop[0])}
            {#each prop[1] as slot}
              [{slot}]
            {/each}            
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