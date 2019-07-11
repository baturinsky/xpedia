<script>
  import { rul } from "./Ruleset";

  export let id;
  export let left = false;
  export let maxWidth = 640
  export let maxZoom = 4
  export let style = ""

  function loaded(img) {
    console.info(img)
    let zoom = Math.min(maxZoom, Math.max(1, Math.floor(maxWidth / img.naturalWidth)))
    img.width = img.naturalWidth * zoom;
    img.height = img.naturalHeight * zoom;
  }

  console.log(id);

</script>

<style>
  .pedia-image {
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    float: right;
    padding: 5px;
  }
</style>

{#if id && rul.sprite(id)}
  <div>
    <img
      class="pedia-image"
      style={style + (left?"float:left":"")}
      on:load={e => loaded(e.target)}
      alt={id || ''}
      src={rul.sprite(id)} />
  </div>
{/if}