<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";

  export let links;
  export let title

</script>

<style>
  .cols {
    columns: 250px;
    padding-left: 20px;
    color: green;
    margin-right: 10px;
    padding-top: 0px;
  }
  .contain{
    border: solid 0.3px #382C44;
  }
  .header{
    text-align: center;
    color: #66ffff;
    background: #281C34;
    padding: 2px;
  }
</style>

{#if links && links.length > 0}
  <div class="contain">
    {#if title}
      <div class="header">
        {title}
      </div>
    {/if}
    <div class="cols">
      <ol>
        {#each links as option}
          <li>
            <a href={'#' + option}> {rul.str(option)} </a>
          </li>
        {/each}
      </ol>
    </div>
  </div>
{/if}