<script>
  import { rul } from "./Ruleset";

  export let id;
  export let zoom = 2;

  function loaded(e) {
    if (zoom != 1) {
      e.target.width = e.target.naturalWidth * zoom;
      e.target.height = e.target.naturalHeight * zoom;
    }
  }

</script>

<style>
  .pedia-image {
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    float: right;
    padding: 5px;
  }
</style>

{#if rul.sprite(id)}
  <div>
    <img
      class="pedia-image"
      on:load={loaded}
      alt={id || ''}
      src={rul.sprite(id)} />
  </div>
{/if}
