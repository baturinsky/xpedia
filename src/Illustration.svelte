<script>
  import { rul } from "./Ruleset";

  export let id;
  export let left = false;
  export let maxWidth = window.innerWidth>1400?640:320;
  export let maxZoom = 4;
  export let style = "";

  function loaded(img) {
    console.info(img);
    let zoom = Math.min(
      maxZoom,
      Math.max(1, Math.floor(maxWidth / img.naturalWidth))
    );
    img.width = img.naturalWidth * zoom;
    img.height = img.naturalHeight * zoom;
  }

  console.log(id);
</script>

{#if id && rul.sprite(id)}
  <div>
    <a href={rul.sprite(id)}>
      <img
        class="pedia-image"
        style={style + (left ? 'float:left' : '')}
        on:load={e => loaded(e.target)}
        alt={id || ''}
        src={rul.sprite(id)} />
    </a>
  </div>
{/if}
