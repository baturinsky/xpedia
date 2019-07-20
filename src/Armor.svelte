<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte";
  import Value from "./Value.svelte";  

  export let armor;
  let dollColumns = 6;
  let seeAllVariants = false;
  let zoom = 1;
  let seeAlso = [];

  $:{
    console.log(armor);

    seeAlso = []
    if ('storeItem' in armor && armor.storeItem != "STR_NONE"){
      seeAlso.push(armor.storeItem)
    }
    if ('users' in armor){
      for(let item of armor.users.filter(s => s.substr(0, 8) != 'INV_NULL' && s != armor.type && "#" + s != window.location.hash)){
        seeAlso.push(item)
      }
    }
  }

</script>

<style>
</style>

<table class="main-table">
  <tr>
    <td colspan="2" class="table-header">Armor
    {#if seeAlso.length > 0}
      <span style="color:white"> - see also </span> <ItemList items={seeAlso}/>
    {/if}
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <div class="armors">
        {#if Object.keys(armor.dollSprites).length > 1}
          <p>
            <button
              class="btn-hover-effect btn-hover-effect--effect-1"
              on:click={e => (seeAllVariants = !seeAllVariants)}>
              {seeAllVariants ? 'Hide' : 'See'} all variants
            </button>
          </p>
        {/if}

        {#if armor.dollSprites}
          {#each Object.keys(armor.dollSprites).sort((a, b) =>
            rul.bodiesCompare([a, b])
          ) as body, i}
            {#if seeAllVariants || i == 0}
              <div
                class="armor"
                style="left:{(i % dollColumns) * 80}px; top:{Math.floor(i / dollColumns) * 120}px;">
                {#if seeAllVariants}
                  <div class="armor-variant">{body}</div>
                {/if}
                {#each armor.dollSprites[body] as url, j}
                  <img src={url} alt={body} class="armor-layer" />
                {/each}
              </div>
            {/if}
          {/each}
          <div
            style={'height:' + (seeAllVariants ? (Math.floor(Object.keys(armor.dollSprites).length / dollColumns) + 1) * 120 : 120) + 'px'} />
        {/if}
      </div>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <div class="flex-horisontal">
        {#each ['armor', 'damageModifier', 'stats', 'recovery'] as prop}
          {#if armor[prop]}
            <table class="number-table armor-column">
              <thead>
                <tr>
                  <td colspan="2" class="number-table-header" style="text-align:center;">
                    {@html rul.decamelize(prop)}
                  </td>
                </tr>
              </thead>
              {#each Object.keys(armor[prop]).sort((a, b) =>
                rul.str(a) > rul.str(b) ? 1 : -1
              ) as field, i}
                <tr>
                  <td>
                    {@html prop == 'damageModifier' ? rul.damageTypeName(field) : rul.decamelize(field, "&nbsp;")}
                  </td>
                  <td>
                    {#if 'recovery' == prop}
                        {#each Object.keys(armor[prop][field]) as subfield, j}
                          {#if j != 0}
                            <br />
                          {/if}
                          {@html rul.decamelize(subfield)}
                          :
                          <em>{@html rul.decamelize(armor[prop][field][subfield])}</em>
                        {/each}
                      {:else}
                        <em>{@html prop == 'damageModifier' ? Math.floor(armor[prop][field] * 100) : rul.decamelize(armor[prop][field])}</em>
                      {/if}
                  </td>
                </tr>
              {/each}
            </table>
          {/if}
        {/each}
      </div>
    </td>
  </tr>

  {#each Object.entries(armor).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['recovery', 'type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix', 'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(prop[0])}
      <tr>
        <td>
          {@html rul.decamelize(prop[0])}
        </td>
        <td>
          {#if false}
            -
          {:else if prop[0] == 'damageModifier'}
            <table class="number-table">
              {#each prop[1] as res, i}
                <tr>
                  <td width="50%" class="number-table1">
                    {rul.damageTypeName(i)}
                  </td>
                  <td width="50%" class="number-table2">
                    {Math.round(res * 100)}%
                  </td>
                </tr>
              {/each}
            </table>
          {:else if ['corpseBattle'].includes(prop[0])}
            <Link href={prop[1][0]} />
          {:else if 'spriteSheet' == prop[0]}
            <a href={rul.sprite(prop[1])}>{prop[1]}</a>
          {:else if ['builtInWeapons', 'users', 'units'].includes(prop[0])}
            {#each prop[1].filter(s => s.substr(0, 8) != 'INV_NULL') as field, i}
              {#if i != 0},{/if}
              <Link href={field} />
            {/each}
          {:else}<Value val={prop[1]}/>{/if}
        </td>
      </tr>
    {/if}
  {/each}
</table>
