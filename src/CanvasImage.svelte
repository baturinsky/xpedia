<script>
  export let src;
  export let maxWidth = 1e6;
  export let maxHeight = 1e6;
  export let zoom = 1;

  let canvas;
  let ctx;
  let img = null;
  let loaded = false

  function updateImage() {
    canvas.width = Math.min(maxWidth, img.naturalWidth * zoom);
    canvas.height = Math.min(maxHeight, img.naturalHeight * zoom);
    ctx.imageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, img.naturalWidth * zoom, img.naturalHeight * zoom);
    loaded = true;
  }

  function prepareCanvas(node) {
    canvas = node;
    ctx = canvas.getContext("2d");
    img = new Image();
    img.onload = updateImage;
    img.src = src;
  }

  $: {
    if (src && img) {      
      loaded = false;
      img.src = src;
    }
  }
</script>

<a href={src}>
<canvas class="pixelated" style="display:{loaded?'inline':'none'}" bind:this={canvas} use:prepareCanvas />
</a>
