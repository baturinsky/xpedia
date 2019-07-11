<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte";
  
  export let research;
  export let title = "Research"
  let longLists = ['requiresBaseFunc', 'manufacture', 'getOneFree', 'getOneFreeProtected', 'freeFrom', 'unlocks', 'dependencies', 'leadsTo', 'disables']

  $: {
    console.log(research);
  }
</script>

<style>
</style>

<table class="main-table" style="min-width:520px;">
  <tr>
    <td colspan="2" class="table-header"><Link href={title}/></td>
  </tr>
  {#each Object.entries(research).sort((a, b) =>
    (longLists.includes(a)?-10:10) + (a[0] > b[0] ? 1 : -1)
  ) as prop}
    {#if longLists.includes(prop[0])}
      <tr><td colspan="2" class="table-subheader">{rul.decamelize(prop[0])}</td></tr>
      <tr><td colspan="2" class="cols" style="columns:2;">
        <ul>
          {#each prop[1] as field, i}
            <li><Link href={field} /></li>
          {/each}
        </ul>
      </td></tr>
    {:else}
      {#if !['name'].includes(prop[0])}
        <tr>        
            <td class="padding-right">
              {@html rul.decamelize(prop[0])}
            </td>
            <td>
              {#if ['lookup', 'spawnedItem'].includes(prop[0])}
                <Link href={prop[1]} />
              {:else if prop[1] instanceof Object}
                {#each Object.keys(prop[1]).sort() as field, i}
                  {#if i != 0},{/if}
                  {@html rul.decamelize(field) + ":&nbsp;" + rul.decamelize(prop[1][field])}
                {/each}
              {:else}{prop[1]}{/if}
            </td>
        </tr>
        {/if}
    {/if}  
  {/each}
</table>
