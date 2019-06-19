<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  
  export let items
</script>

{#each items as item, i}
  {#if i!=0}, {/if}
  <Link href={item}/>
{/each}
