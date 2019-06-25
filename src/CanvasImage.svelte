<script>
  export let src
  export let maxWidth = 1e6
  export let maxHeight = 1e6
  export let zoom = 1
  
  let canvas
  let ctx
  let img

  function updateImage(){
    canvas.width = Math.min(maxWidth, img.naturalWidth * zoom)
    canvas.height = Math.min(maxHeight, img.naturalHeight * zoom)
    ctx.drawImage(img, 0, 0, img.naturalWidth * zoom, img.naturalHeight * zoom);
  }

  function loaded(node){
    canvas = node
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false
    ctx.imageSmoothingQuality = "high"
    img = new Image();
    img.onload = updateImage
    img.src = src;
  }

  $:{
    if(img)
      img.src = src
  }  
</script>

<style>
.crisp-edges{
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
</style>

<canvas class="crisp-edges" bind:this={canvas} use:loaded></canvas>