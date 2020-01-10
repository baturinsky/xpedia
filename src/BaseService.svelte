<script>
  import { rul } from "./Ruleset";
  import { Link, LinksPage, Value, LinksList } from "./Components";

  export let service

</script>

<style>
</style>

<table class="main-table">

  {#each Object.entries(service).sort((a, b) => (a[0]=="providedBy"?-10:10) + (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['id'].includes(prop[0])}
      <tr><td>{rul.decamelize(prop[0])}</td>
      <td><LinksList items={prop[1]}/></td></tr>
    {/if}
  {/each}

</table>
