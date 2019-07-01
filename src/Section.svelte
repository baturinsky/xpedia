<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";

  export let section;

  $: {
    console.log(section);
  }
</script>

<style>
  .cols {
    padding-left: 5px;
    height: 100%;
    columns: 250px;
    padding-left: 15px;
    color: green;
  }
</style>

<div class="cols">
  <ol>
    {#each section.articles as option}
      <li>
        <a href={'#' + option.id}> {option.title} </a>
      </li>
    {/each}
  </ol>
</div>
