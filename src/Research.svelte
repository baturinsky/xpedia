<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte";
  import Illustration from "./Illustration.svelte";
  import Item from "./Item.svelte";

  export let research;

  $: {
    console.log(research);
  }
</script>

<style>
</style>

<table class="main-table">
  <tr>
    <td colspan="2" class="table-header">Research</td>
  </tr>
  {#each Object.entries(research).sort((a, b) =>
    a[0] > b[0] ? 1 : -1
  ) as prop}
    {#if !['name'].includes(prop[0])}
      <tr>
        <td class="padding-right">
          {@html rul.decamelize(prop[0])}
        </td>
        <td>
          {#if ['lookup'].includes(prop[0])}
            <Link href={prop[1]} />
          {:else if ['getOneFree', 'unlocks', 'dependencies', 'leadsTo'].includes(prop[0])}
            {#each prop[1] as field, i}
              {#if i != 0}<br/>{/if}
              <Link href={field} />
            {/each}
          {:else if prop[1] instanceof Object}
            {#each Object.keys(prop[1]).sort() as field, i}
              {#if i != 0},{/if}
              {@html rul.decamelize(field) + ":&nbsp;" + rul.decamelize(prop[1][field])}
            {/each}
          {:else}{prop[1]}{/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
