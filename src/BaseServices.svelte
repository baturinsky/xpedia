<script>
  import { rul } from "./Ruleset";
  import { Link, LinksPage, Value, LinksList } from "./Components";

  export let query = null

  console.log(query);
</script>

<style>
.highlight td{
  background: #685C74;
}
a{
  color:cyan;
}
</style>

<table class="main-table">

  {#each Object.entries(rul.baseServices) as service}
    <tr class={service[0] == query?"highlight":""}>
      <td><a color=cyan href={'#' + service[0]}>{@html rul.str(service[0])}</a></td>
      <td>
        <LinksList items={service[1].providedBy} />
      </td>
    </tr>
  {/each}

</table>
