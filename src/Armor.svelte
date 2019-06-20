<script>
  import { rul } from "./Ruleset";
  import Sprite from "./Sprite.svelte";
  import Link from "./Link.svelte";

  export let armor;
  let dollColumns = 10;
  let seeAllVariants = false;
  let zoom = 1;

  console.log(armor)
</script>

<style>
  .rec{
    padding-right: 10pt;
  }
  .res1 {
    text-align: right;
    padding-right: 5pt;
  }
  .res2 {
    text-align: right;
  }
  .armor {
    pointer-events: none;
    position: relative;
  }
  .armor-layer {
    position: absolute;
    top: -30px;
    left: 0px;
  }
  .armor-variant {
    left: 40px;
    position: absolute;
    opacity: 0.5;
    font-size: small;
  }
</style>

{#if Object.keys(armor.dollSprites).length > 1}
  <p>
    <button class="button" style="width:170px" on:click={e => (seeAllVariants = !seeAllVariants)}>
      {seeAllVariants ? 'Hide' : 'See'} all variants
    </button>
  </p>
{/if}

{#if armor.dollSprites}
  {#each Object.keys(armor.dollSprites).sort((a,b) => rul.bodiesCompare([a,b]))  as body, i}
    {#if seeAllVariants || i == 0}
      <div
        class="armor"
        style={'left:' + (i % dollColumns) * 80 + 'px;' + 'top:' + Math.floor(i / dollColumns) * 120 + 'px;'}>
        {#if seeAllVariants}<div class="armor-variant">{body}</div>{/if}
        {#each armor.dollSprites[body] as url, j}
          <img src={url} alt={body} class="armor-layer" />
        {/each}
      </div>
    {/if}
  {/each}
{/if}
<div
  style={'height:' + (seeAllVariants ? (Math.floor(Object.keys(armor.dollSprites).length / dollColumns) + 1) * 120 : 120) + 'px'} />

<table class="main-table">
  {#each Object.entries(armor).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix',
    'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'tags'].includes(prop[0])}
      <tr>
        <td>{rul.decamelize(prop[0])}</td>
        <td>
          {#if prop[0] == 'damageModifier'}
            <table padding="3px">
              {#each prop[1] as res, i}
                <tr>
                  <td class="res1">{rul.damageTypeName(i)}</td>
                  <td class="res2">{Math.round(res * 100)}%</td>
                </tr>
              {/each}
            </table>
          {:else if ['storeItem', 'corpseGeo', 'specialWeapon'].includes(prop[0])}
            <Link href={prop[1]}/>
          {:else if 'corpseBattle' == prop[0]}
            <Link href={prop[1][0]}/>            
          {:else if 'spriteSheet' == prop[0]}
            <a href={rul.sprite(prop[1])}>{prop[1]}</a>
          {:else if 'recovery' == prop[0]}
            <table>
              {#each Object.keys(prop[1]).sort() as field, i}
                <tr>
                <td class="rec">{rul.decamelize(field)}</td>
                <td>
                  {#each Object.keys(prop[1][field]) as subfield, j}
                    {#if j != 0}, {/if}
                    {rul.decamelize(subfield)}: {rul.decamelize(prop[1][field][subfield])}
                  {/each}                  
                </td>
                </tr>
              {/each}
            </table>
          {:else if ['builtInWeapons','units'].includes(prop[0])}
            {#each prop[1] as field, i}
              {#if i != 0}, {/if}
              <Link href={field}/>              
            {/each}
          {:else if prop[1] instanceof Object}
            {#each Object.keys(prop[1]).sort() as field, i}
              {#if i != 0}, {/if}
              {rul.decamelize(field)}: {rul.decamelize(prop[1][field])}
            {/each}
          {:else}
            {prop[1]}
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
