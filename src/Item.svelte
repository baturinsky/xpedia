<script>
  import { rul } from "./Ruleset";
  import Sprite from "./Sprite.svelte";
  import SpecialBonus from "./SpecialBonus.svelte"
  import ItemList from "./ItemList.svelte"  

  export let item;

</script>

<style>
  td{
    padding:0px 2px;
  }
  .sprite{
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
  audio{
    height:20px;
    width:300px;
  }
</style>

<Sprite path={item.sprite} zoom="4" />

<table>
  {#each Object.entries(item).sort((a,b) => a[0]>b[0]?1:-1) as prop}
    {#if prop[0] != 'categories'}
      <tr>
        <td>{rul.decamelize(prop[0])}</td>
        <td>
        {#if prop[0] == 'compatibleAmmo' || prop[0] == 'requiresBuy'}
          <ItemList items={prop[1]}/>
        {:else if ['damageBonus', 'meleeBonus', 'accuracyMultiplier', 'meleeMultiplier', 'closeQuartersMultiplier'].includes(prop[0])}
          <SpecialBonus bonus={prop[1]}/>
        {:else if prop[0] == 'damageType'}
          {item.damageTypeName()}
        {:else if ['reloadSound', 'fireSound', 'meleeHitSound'].includes(prop[0])}          
          {#if rul.sounds[prop[1]]}
            <a href={rul.sound(prop[1])}>{rul.sounds[prop[1]]}</a>
            <audio controls src={rul.sound(prop[1])}>Audio tag not working</audio>
          {:else}
            {prop[1]}
          {/if}
        {:else if ['floorSprite', 'handSprite'].includes(prop[0])}
          <a href={rul.specialSprite(prop[0], prop[1])}>{prop[1]}</a> <img class="sprite" src={rul.specialSprite(prop[0], prop[1])}/>
        {:else if prop[1] instanceof Object}
          {#each Object.keys(prop[1]).sort() as field, i}
            {#if i!=0}, {/if}
            {field}: {prop[1][field]}
          {/each}
        {:else}        
          {prop[1]}
        {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>

<br/>