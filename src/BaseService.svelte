<script>
  import { rul } from "./Ruleset";
  import ItemList from "./ItemList.svelte"
  import Link from "./Link.svelte";

  export let service

</script>

<style>
</style>

<table class="main-table">

  {#each Object.entries(service).sort((a, b) => (a[0]=="providedBy"?-10:10) + (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['id'].includes(prop[0])}
      <tr><td>{rul.decamelize(prop[0])}</td>
      <td><ItemList items={prop[1]}/></td></tr>
    {/if}
  {/each}

</table>
