<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";

  export let links;
  export let title = null;
</script>

<style>
  .contain {
    border: solid 0.3px #382c44;
  }
  .header {
    text-align: center;
    color: #66ffff;
    background: #281c34;
    padding: 2px;
  }
</style>

{#if links && links.length > 0}
  <div class="contain">
    {#if title}
      <div class="header"> {title} </div>
    {/if}
    <div class="cols">  
      <ol>
        {#each links as option}
          <li>
            <Link href={option} />
          </li>
        {/each}
      </ol>
    </div>
  </div>
{/if}
