<script>
  import { rul } from "./Ruleset";
  import ItemList from "./ItemList.svelte";
  import Link from "./Link.svelte";

  export let val;
</script>

{#if Array.isArray(val)}
  <ItemList items={val} vertical={true} />            
{:else if val instanceof Object}
  <table class="number-table">
    {#each Object.keys(val).sort() as field, i}
      <tr>
        <td>
          <nobr>{@html rul.decamelize(field)}</nobr>
        </td>
        <td>
          <em><Link href={val[field]}/></em>
        </td>
      </tr>
    {/each}
  </table>
{:else if val===true || val ===false}
  <span style="color:{val?'lime':'red'}">{val}</span>
{:else if !isNaN(+val)}
  <em class="num">{val.toLocaleString()}</em>
{:else}
  <Link href={val}/>
{/if}