<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte";
  import Illustration from "./Illustration.svelte";
  
  export let manufacture;

  $: {
    console.log(manufacture);
  }
</script>

<style>
</style>

<table class="main-table">
  <tr>
    <td colspan="2" class="table-header">Manufacture</td>
  </tr>
  {#each Object.entries(manufacture).sort((a, b) =>
    a[0] > b[0] ? 1 : -1
  ) as prop}
    {#if !['name'].includes(prop[0])}
      <tr>
        <td class="padding-right">
          {@html rul.decamelize(prop[0])}
        </td>
        <td>
          {#if ['category'].includes(prop[0])}
            <Link href={prop[1]} />
          {:else if ['requires'].includes(prop[0])}
            {#each prop[1] as field, i}
              {#if i != 0}<br/>{/if}
              <Link href={field} />
            {/each}
          {:else if ['requiresBaseFunc'].includes(prop[0])}
            <ItemList items={prop[1]}/>
          {:else if ['producedItems', 'requiredItems'].includes(prop[0])}
            <table class="number-table">
            {#each Object.keys(prop[1]).sort() as field, i}
              <tr><td><Link href={field}/></td><td>{prop[1][field]}</td></tr>
            {/each}
            </table>
          {:else if prop[1] instanceof Object}
            <table class="number-table">
            {#each Object.keys(prop[1]).sort() as field, i}
              <tr><td>{@html rul.decamelize(field)}</td><td>{@html rul.decamelize(prop[1][field])}</td></tr>
            {/each}
            </table>
          {:else}{prop[1]}{/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
