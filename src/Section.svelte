<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";

  export let section;

  $: {
    console.log(section);
  }

</script>

<style>
.cols{
  padding-left: 5px;
  height:100%;
  columns: 250px;
}
</style>

<div class="cols">
  {#each section.articles as option}
    <a href={'#' + option.id}>
      {option.title}
    </a>
    <br/>
  {/each}
</div>