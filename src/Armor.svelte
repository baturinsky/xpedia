<script>
  import { rul } from "./Ruleset";
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

<table class="main-table">
  <tr> <td colspan="2" class="table-header">Armor</td> </tr>
  <tr>
  <td colspan="2">
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
      <div style={'height:' + (seeAllVariants ? (Math.floor(Object.keys(armor.dollSprites).length / dollColumns) + 1) * 120 : 120) + 'px'} />
    {/if}
  </td>
  </tr>
  <tr>
  <td colspan="2">
    <div class="flex-horisontal">
      {#each ['armor', 'damageModifier', 'stats'] as prop}
        {#if armor[prop]}
        <table class="number-table">
        <tr><td colspan="2" class="table-header">{@html rul.decamelize(prop)}</td></tr>
        {#each Object.keys(armor[prop]).sort() as field, i}
          <tr>
          <td>{@html prop=="damageModifier"?rul.damageTypeName(field):rul.decamelize(field)}</td>
          <td>{@html prop=="damageModifier"?Math.floor(armor[prop][field]*100):rul.decamelize(armor[prop][field])}</td>
          </tr>
        {/each}
        </table>
        {/if}
      {/each}
    </div>
  </td>
  </tr>

  {#each Object.entries(armor).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix',
    'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(prop[0])}
      <tr>
        <td>{@html rul.decamelize(prop[0])}</td>
        <td>
          {#if false}
            -
          {:else if prop[0] == 'damageModifier'}
            <table class="number-table">
              {#each prop[1] as res, i}
                <tr>
                  <td width="50%" class="number-table1">{rul.damageTypeName(i)}</td>
                  <td width="50%" class="number-table2">{Math.round(res * 100)}%</td>
                </tr>
              {/each}
            </table>
          {:else if ['storeItem', 'corpseGeo', 'specialWeapon'].includes(prop[0])}
            <Link href={prop[1]}/>
          {:else if ['corpseBattle'].includes(prop[0])}
            <Link href={prop[1][0]}/>            
          {:else if 'spriteSheet' == prop[0]}
            <a href={rul.sprite(prop[1])}>{prop[1]}</a>
          {:else if 'recovery' == prop[0]}
            <table class="number-table">
              {#each Object.keys(prop[1]).sort() as field, i}
                <tr>
                <td class="rec">{@html rul.decamelize(field)}</td>
                <td>
                  {#each Object.keys(prop[1][field]) as subfield, j}
                    {#if j != 0}<br/> {/if}
                    {@html rul.decamelize(subfield)}: {@html rul.decamelize(prop[1][field][subfield])}
                  {/each}                  
                </td>
                </tr>
              {/each}
            </table>
          {:else if ['builtInWeapons','users', 'units'].includes(prop[0])}
            {#each prop[1].filter(s => s.substr(0,8) != "INV_NULL") as field, i}
              {#if i != 0}, {/if}
              <Link href={field}/>
            {/each}
          {:else if prop[1] instanceof Object}
            <table class="number-table">
            {#each Object.keys(prop[1]).sort() as field, i}
              <tr><td>{@html rul.decamelize(field)}</td><td>{@html rul.decamelize(prop[1][field])}</td></tr>
            {/each}
            </table>
          {:else}
            {prop[1]}
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
