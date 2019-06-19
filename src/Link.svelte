<script>
  import { rul } from "./Ruleset";
  export let href
</script>

{#if rul.article(href)}
  <a href={'#' + href}>{rul.str(href)}</a>
{:else}
  {rul.str(href)}
{/if}