<script>
  import { rul } from "./Ruleset";
  import Illustration from "./Illustration.svelte";
  import SpecialBonus from "./SpecialBonus.svelte"
  import ItemList from "./ItemList.svelte"  
  import Link from "./Link.svelte";
  import SmartImage from "./SmartImage.svelte"

  export let item;
  export let title = "Item"
  let attacks

  $:{ 
      attacks = item.attacks().slice()
      if(item.compatibleAmmo)
        for(let ammoId of item.compatibleAmmo){
          let ammo = rul.items[ammoId]
          let ammoAttack = ammo.attacks()[0]
          ammoAttack.item = ammo
          attacks.push(ammoAttack)
        }

      console.log(attacks)
    }

  console.log(item)
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
  audio{
    height:20px;
    width:300px;
  }
  
  .attacks-table{
    min-width: 800px;
  }

  .attacks-table td{
    border: solid 0.3px #382C44;
    font-size: 14pt;
  }
  .attacks-table thead{
    background: #382C44;  
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

<table class="main-table">
  <tr> <td colspan="2" class="table-header">{title}</td> </tr>
  {#if (item.sprite && item.sprite != "Resources/Blanks/Blank.png") ||attacks.length > 0}
    <tr> <td colspan="2" style="padding:10px;">
      <div style="display: flex;">
      <Illustration id={item.sprite} left={true} maxZoom={2}/>
      {#if attacks.length > 0}
        <table class="attacks-table">
          <thead>
            {#if item.battleType != 2}
              <td>mode</td>
              <td>accuracy</td>
              <td>cost</td>
            {/if}
            <td>damage</td>
            <td>mods</td>
          </thead>
          {#each attacks as attack}
            <tr>
              {#if attack.mode == "ammo"}
                {#if item.battleType != 2}
                  <td class="ammo-img">
                    <SmartImage src={rul.sprite(attack.item.sprite)} maxWidth={32*attack.item.invWidth} maxHeight={32*attack.item.invHeight} zoom="2"/>
                    <!--<img class="sprite" use:ammoSprite style="position:relative;" alt="X" src={rul.sprite(attack.item.sprite)}/>-->                    
                  </td> 
                  <td colspan="2">
                    <Link href={attack.item.type}/><br/><small>Clip: {attack.item.clipSize} Wgt: {attack.item.weight}</small>
                  </td>
                {/if}          
              {:else}
                <td>{attack.mode}{attack.shots==1?"":"×" + attack.shots}</td> 
                <td>{attack.accuracy} <small><SpecialBonus plus={true} bonus={attack.accuracyMultiplier}/></small> </td>
                <td>
                {attack.cost.time + (attack.flatTime?"":"%")} <small>TU</small>                
                {#each Object.keys(attack.cost) as res}
                  {#if res != 'time'}<br/>{attack.cost[res]}&nbsp;<small>{res}</small>{/if}
                {/each}                
                </td>
              {/if}          
              <td>{#if attack.damage || attack.damageType}
                {attack.pellets>1 && attack.damageBonus?"(":""}{attack.damage}
                <small>
                  <SpecialBonus plus={true} bonus={attack.damageBonus}/>{attack.pellets>1 && attack.damageBonus?")":""}
                </small>
                {attack.pellets>1?" ×" + attack.pellets:""}
                <br/>{rul.damageTypeName(attack.damageType)}
              {/if}
              </td>
              <td>
                {#if attack.alter}            
                  <table class="alter">
                  {#each Object.keys(attack.alter).sort() as field, i}
                    <tr>
                    <td>{field}</td><td>{attack.alter[field]}</td>
                    </tr>
                  {/each}
                  </table>
                {/if}
              </td>
            </tr>      
          {/each}
        </table>
      {/if}  
      </div>
    </td></tr>
    
  {/if}


  {#each Object.entries(item).sort((a,b) => a[0]>b[0]?1:-1) as prop, linei}
    {#if !['sprite', 'type', '_attacks', 'damageAlter'].includes(prop[0])}
      <tr>
        <td>{@html rul.decamelize(prop[0])}</td>
        <td class="right-column">
        {#if ['compatibleAmmo', 'compatibleWeapons', 'categories', 'requiresBuy'].includes(prop[0])}
          <ItemList items={prop[1]}/>
        {:else if ['damageBonus', 'meleeBonus', 'accuracyMultiplier', 'meleeMultiplier', 'closeQuartersMultiplier'].includes(prop[0])}
          <SpecialBonus bonus={prop[1]}/>
        {:else if ['defaultInventorySlot', 'name'].includes(prop[0])}
          <Link href={prop[1]}/>
        {:else if ['damageType', 'meleeType'].includes(prop[0])}
          {rul.damageTypeName(prop[1])}
        {:else if prop[0] == 'battleType'}
          {prop[1]}: {rul.battleTypes[prop[1]]}
        {:else if ['reloadSound', 'fireSound', 'meleeHitSound', 'hitSound'].includes(prop[0])}          
          {#if rul.sounds[prop[1]]}
            <a href={rul.sound(prop[1])}>{rul.sounds[prop[1]]}</a><br/>
            <audio controls src={rul.sound(prop[1])}>Audio tag not working</audio>
          {:else}
            {prop[1]}
          {/if}
        {:else if ['floorSprite', 'handSprite'].includes(prop[0])}
          <a style="vertical-align:top" href={rul.specialSprite(prop[0], prop[1])}>{prop[1]}</a> 
          <img class="sprite" alt={prop[1]} src={rul.specialSprite(prop[0], prop[1])}/>
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

<br/>