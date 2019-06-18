<script>
  import { rul } from "./Ruleset";
  export let items
</script>

{#each items as item, i}
  {#if i!=0}, {/if}
  <a href={'#' + item}>{rul.lang[item]}</a>
{/each}
