<script>
  import { rul } from "./Ruleset";
  export let href
  
  $:{
    href = href.type || href
  }
</script>

{#if rul.article(href)}
  <a href={'#' + href}>{@html rul.str(href)}</a>
{:else}
  {rul.str(href)}
{/if}