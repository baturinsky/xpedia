<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";

  export let links;
  export let title = null;  
  let sorted = false;

  $: sortedList = sorted?links.slice().sort((a,b) => rul.str(a) > rul.str(b)?1:-1):links

</script>

{#if links && links.length > 0}
  {#if !title}
    <div class="links-page-button">
      <button style={sorted?"":"text-decoration:line-through"} on:click={e => sorted = !sorted}>A-Z</button>
    </div>
  {/if}
  <div class="links-page">
    {#if title}
      <div class="links-page-header"> {title} </div>
    {/if}
    <div class="cols">  
      <ol>
        {#each sortedList as option}
          <li>
            <Link href={option} />
          </li>
        {/each}
      </ol>
    </div>
  </div>
{/if}
