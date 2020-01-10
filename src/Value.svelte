<script>
  import { rul } from "./Ruleset";
  import LinksList from "./LinksList.svelte";
  import Link from "./Link.svelte";

  export let val;
</script>

{#if Array.isArray(val)}
  <LinksList items={val} vertical={true} />            
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
  <span style="color:{val?'lime':'red'}">{rul.str(val.toString())}</span>
{:else if !isNaN(+val)}
  <em class="num">{val.toLocaleString()}</em>
{:else}
  <Link href={val}/>
{/if}