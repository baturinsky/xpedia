<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte"
  import Illustration from "./Illustration.svelte";
  import SpecialBonus from "./SpecialBonus.svelte"

  export let ufo;

  $: {console.info(ufo)}

</script>

<table class="main-table">
  <tr> <td colspan="2" class="table-header">Craft</td> </tr>
  {#each Object.entries(ufo).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(prop[0])}
      <tr>
        <td class="padding-right">{@html rul.decamelize(prop[0])}</td>
        <td>
          {#if ['modSprite'].includes(prop[0])}
            <img class="sprite" alt='X' src={rul.sprite(prop[1])}/>
          {:else if prop[0] == "raceBonus"}
            <table class="number-table">
            {#each Object.keys(prop[1]).sort() as field, i}
              <tr><td>{rul.str(field)}</td><td>
                {#each Object.keys(prop[1][field]).sort() as field2, i2}
                  {field2}:&nbsp;<em><Link href={prop[1][field][field2]}/></em><br/>
                {/each}              
              </td></tr>
            {/each}
            </table>
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