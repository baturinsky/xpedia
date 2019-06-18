<script>
  import { rul } from './Ruleset';

  export let id = null
  export let path = null
  export let zoom = 2

  let url = null

  function loaded(e){
    e.target.width = e.target.naturalWidth * zoom
    e.target.height = e.target.naturalHeight * zoom
  }

  $: {
    if(path)
      url = rul.path + path

    if(id){
      let sprite = rul.spritesById[id];
      url = sprite? rul.path +sprite.path : "0.png";
    }
  }

</script>

<style>
  .pedia-image {
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    float: right;
    padding: 5px;
    max-width:200%;
    max-height:200%;
  }
</style>

{#if (id || path)}
  <div>
    <img      
      class="pedia-image"
      on:load={loaded}
      alt={id || path || ""}
      src={url} />
  </div>
{/if}