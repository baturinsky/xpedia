<script>
  import { rul } from "./Ruleset";
  import Sprite from './Sprite.svelte';
  import Item from './Item.svelte';
  import Armor from './Armor.svelte';

  export let article
</script>

<h1 class="title">{article.title}</h1>

<Sprite id={article.image_id}/>

<div class="narrow">
  {@html article.text || ""}
</div>

<br/>

{#if article.type_id == 4}
  <Item item={rul.items[article.id]}/>
{:else if article.type_id == 5}
  <Armor armor={rul.armors[article.id]}/>
{/if}
