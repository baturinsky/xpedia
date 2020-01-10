<script>
  import { rul } from "./Ruleset";
  import BaseServiceList from "./BaseServiceList.svelte"
  import { Link, LinksPage, Value } from "./Components";
  
  export let manufacture;

  $: {
    console.log(manufacture);
  }
</script>

<style>
</style>

  <tr>
    <td colspan="2" class="table-header">Manufacture</td>
  </tr>

  {#if 'randomProducedItems' in manufacture}
    <tr><td colspan="2" class="table-subheader">{rul.decamelize('randomProducedItems')}</td></tr>
    <tr><td colspan="2">
      <table class="number-table" width="100%" style="margin:0px">
      {#each manufacture.randomProducedItems as chance}
        {#if Object.keys(chance[1]).length == 0}
          <tr><td colspan="2" style="text-align:center;">NOTHING</td></tr>
        {/if}
        {#each Object.keys(chance[1]).sort() as field, i}
          <tr><td>{chance[1][field]}</td><td><Link href={field}/></td></tr>
        {/each}
        <tr><td colspan="2" style="text-align:center; border-bottom: solid 0.3px #382C44;">×{chance[0]} / {(chance[0]/manufacture.chanceSum*100).toFixed(3)}%</td></tr>
      {/each}
      </table>
    </td></tr>
  {/if}

  {#each Object.entries(manufacture).sort((a, b) =>
    a[0] > b[0] ? 1 : -1
  ) as prop}
    {#if !['name', 'randomProducedItems'].includes(prop[0])}
      <tr>
        <td class="padding-right">
          {@html rul.decamelize(prop[0])}
        </td>
        <td>
          {#if ['requiresBaseFunc' ].includes(prop[0])}
            <BaseServiceList items={prop[1]} vertical={true}/>
          {:else if ['producedItems', 'requiredItems'].includes(prop[0])}
            <table class="number-table">
            {#each Object.keys(prop[1]).sort() as field, i}
              <tr><td>{prop[1][field]}</td><td><Link href={field}/></td></tr>
            {/each}
            </table>
          {:else}<Value val={prop[1]}/>{/if}
        </td>
      </tr>
    {/if}
  {/each}
