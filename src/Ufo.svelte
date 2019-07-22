<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte"
  import Illustration from "./Illustration.svelte";
  import SpecialBonus from "./SpecialBonus.svelte"
  import Value from "./Value.svelte";  

  export let ufo;

  $: {console.info(ufo)}

</script>

<table class="main-table">
  <tr> <td colspan="2" class="table-header">Craft</td> </tr>
  {#each Object.entries(ufo).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
      <tr>
        <td class="padding-right">{@html rul.decamelize(key)}</td>
        <td>
          {#if ['modSprite'].includes(key)}
            <img class="sprite" alt='X' src={rul.sprite(prop)}/>
          {:else if key == "raceBonus"}
            <table class="number-table">
            {#each Object.keys(prop).sort() as field, i}
              <tr><td>{rul.str(field)}</td><td>
                {#each Object.keys(prop[field]).sort() as field2, i2}
                  {field2}:&nbsp;<em><Link href={prop[field][field2]}/></em><br/>
                {/each}              
              </td></tr>
            {/each}
            </table>
          {:else}
            <Value val={prop}/>
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>