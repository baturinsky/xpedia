<script>
  import { rul } from "./Ruleset";

  export let id;
  export let left = false;
  export let maxWidth = 640
  export let maxZoom = 4

  function loaded(e) {
    let zoom = Math.min(maxZoom, Math.max(1, Math.floor(maxWidth / e.target.naturalWidth)))
    e.target.width = e.target.naturalWidth * zoom;
    e.target.height = e.target.naturalHeight * zoom;
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
      style={left?"float:left":""}
      on:load={loaded}
      alt={id || ''}
      src={rul.sprite(id)} />
  </div>
{/if}
