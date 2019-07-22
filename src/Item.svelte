<script>
  import { rul } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import SpecialBonus from "./SpecialBonus.svelte"
  import ItemList from "./ItemList.svelte"  
  import Link from "./Link.svelte";
  import CanvasImage from "./CanvasImage.svelte"
  import BaseServiceList from "./BaseServiceList.svelte"
  import Value from "./Value.svelte";  

  export let item;
  export let title = "Item"
  let attacks

  function soundsFrom(sounds){
    if(!sounds)
      return []
    if(!sounds.length)
      sounds = [sounds]
    return sounds.map(s => rul.path + rul.sounds[s]).filter(s => s)
  }

  $:{ 
      attacks = item.attacks().slice()
      if(item.compatibleAmmo)
        for(let ammoId of item.compatibleAmmo){
          let ammo = rul.items[ammoId]
          let ammoAttack = ammo.attacks()[0]
          ammoAttack.item = ammo
          attacks.push(ammoAttack)
        }

      console.info(attacks)
    }

  console.info(item)
</script>

<style>
  td{
    padding:0px 2px;
  }
  .sprite{
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
  .right-column{
    vertical-align: top;
  }
  .alter td{
    border: none;
    font-size: small;
  }
  img {
    max-width: 100%;
  }  
  .ammo-img{
    text-align: center; 
    vertical-align: middle;
    padding: 0px 2px 0px 0px;
  }
</style>

  <tr> <td colspan="2" class="table-header">{title}</td> </tr>
  {#if (item.sprite && item.sprite != "Resources/Blanks/Blank.png") ||attacks.length > 0}
    <tr> <td colspan="2">
      <div style="display: flex; align-items: flex-start; margin: 5px 3px;">
      <CanvasImage src={rul.sprite(item.sprite)} maxWidth={32*item.invWidth} maxHeight={32*item.invHeight} zoom="2"/>
      {#if attacks.length > 0}
        <table class="attacks-table">
          <thead>
            {#if item.battleType != 2}
              <td>mode</td>
              <td>accuracy</td>
              <td>cost</td>
            {/if}
            <td>damage</td>
          </thead>
          {#each attacks as attack}
            <tr>
              {#if attack.mode == "ammo"}
                {#if item.battleType != 2}
                  <td rowspan="2" class="ammo-img">
                    <CanvasImage src={rul.sprite(attack.item.sprite)} maxWidth={32*attack.item.invWidth} maxHeight={32*attack.item.invHeight} zoom="2"/>
                    <!--<img class="sprite" use:ammoSprite style="position:relative;" alt="X" src={rul.sprite(attack.item.sprite)}/>-->                    
                  </td> 
                  <td colspan="2">
                    <Link href={attack.item.type}/><br/><small>Clip: {attack.item.clipSize} Wgt: {attack.item.weight}</small>
                  </td>
                {/if}          
              {:else}
                <td rowspan="2">{attack.name}{attack.shots==1?"":"×" + attack.shots}</td> 
                <td><nobr><em>{attack.accuracy}</em><small>%<br/><SpecialBonus bonus={attack.accuracyMultiplier}/></small></nobr></td>
                <td>
                <em>{attack.cost.time + (attack.flatTime?"":"%")}</em> <small>TU</small>                
                {#each Object.keys(attack.cost) as res}
                  {#if res != 'time' && attack.cost[res] != 0}<br/><Value val={attack.cost[res]}/>&nbsp;<small>{res}</small>{/if}
                {/each}                
                </td>
              {/if}          
              <td>{#if 'damage' in attack || 'damageType' in attack}
                <nobr>{attack.pellets>1 && attack.damageBonus?"(":""}<em>{attack.damage || 0}</em>
                <small>
                  <SpecialBonus plus={true} bonus={attack.damageBonus}/>{attack.pellets>1 && attack.damageBonus?")":""}
                </small>
                {attack.pellets>1?" ×" + attack.pellets:""}
                </nobr>
                <br/><Link href={rul.damageTypes[attack.damageType]}/>
              {/if}
              </td>
              </tr>
              <tr>
              <td colspan="3" style="columns: 2;">
                <small>
                {#if attack.alter}            
                  {#each Object.keys(attack.alter).sort() as field, i}
                    {field}:&nbsp;<Value val={attack.alter[field]}/><br/>
                  {/each}
                {/if}
                </small>
              </td>
            </tr>      
          {/each}
        </table>
      {/if}  
      </div>
    </td></tr>
    
  {/if}


  {#each Object.entries(item).sort((a,b) => a[0]>b[0]?1:-1) as [key, prop]}
    {#if !['sprite', 'type', '_attacks', 'damageAlter'].includes(key)}
      <tr>
        <td>{@html rul.decamelize(key)}</td>
        <td class="right-column">
        {#if ['requiresBuyBaseFunc' ].includes(key)}
            <BaseServiceList items={prop} vertical={true}/>
        {:else if ['manufacture', 'componentOf'].includes(key)}
          <table class="number-table">
          {#each Object.keys(prop) as field, i}
            <tr><td><em>{prop[field]}</em></td><td><Link href={field}/></td></tr>
          {/each}
          </table>
        {:else if ['damageBonus', 'meleeBonus', 'accuracyMultiplier', 'meleeMultiplier', 'closeQuartersMultiplier'].includes(key)}
          <SpecialBonus bonus={prop}/>
        {:else if ['damageType', 'meleeType'].includes(key)}
          {rul.damageTypeName(prop)}
        {:else if key == 'battleType'}
          {prop}: {rul.battleTypes[prop]}
        {:else if key.includes("Sound")}
          {#each soundsFrom(prop) as sound, i}
            {@html i>0?"<br/>":""}
            <audio controls src={sound}>Audio tag not working</audio>
          {/each}
        {:else if ['floorSprite', 'handSprite'].includes(key)}
          <a style="vertical-align:top" href={rul.specialSprite(key, prop)}>{prop}</a> 
          <img class="sprite" alt={prop} src={rul.specialSprite(key, prop)}/>
        {:else}        
          <Value val={prop}/>
        {/if}
        </td>
      </tr>
    {/if}
  {/each}
