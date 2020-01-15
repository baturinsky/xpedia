<script>
  import { rul } from "./Ruleset";
  export let href
  
  $:{
    if(href && href.type)
      href = href.type
  }
</script>

{#if rul.article(href)}
  <a href={'##' + href}>{rul.str(href)}</a>
{:else}
  {rul.str(href)}
{/if}