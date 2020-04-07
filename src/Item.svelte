<script>
  import { rul } from "./Ruleset";
  import SpecialBonus from "./SpecialBonus.svelte";
  import Link from "./Link.svelte";
  import CanvasImage from "./CanvasImage.svelte";
  import BaseServiceList from "./BaseServiceList.svelte";
  import Value from "./Value.svelte";
  import AlterList from "./AlterList.svelte";
  import TableKey from "./TableKey.svelte";

  export let item;
  export let text = "";
  export let title = rul.str("Item");
  let attacks;

  function soundsFrom(sounds) {
    if (!sounds) return [];
    if (!sounds.length) sounds = [sounds];
    return sounds.map(s => rul.path + rul.sounds[s]).filter(s => s);
  }

  $: {
    attacks = item.attacks().slice();

    if (item.compatibleAmmo)
      for (let ammoId of item.compatibleAmmo) {
        let ammo = rul.items[ammoId];
        let ammoAttack = ammo.attacks()[0];
        attacks.push(ammoAttack);
      }

    console.info(attacks);
  }

  console.info(item);
</script>

<style>
  .right-column {
    vertical-align: top;
  }
  img {
    max-width: 100%;
  }
  .ammo-img {
    text-align: center;
    vertical-align: middle;
    padding: 0px 2px 0px 0px;
  }
</style>

<tr class="table-header">
  <td colspan="2">{title}</td>
</tr>
{#if (item.sprite && item.sprite != 'Resources/Blanks/Blank.png') || attacks.length > 0}
  <tr>
    <td colspan="2" class="td-attacks-table">
      <div class="row">
        <div style="vertical-align:middle;">
          <CanvasImage {item} zoom="2" />
        </div>
        <span style="padding:1rem;">
          {@html text}
        </span>
      </div>

      <div>
        {#if attacks.length > 0}
          <table class="attacks-table">
            <thead>
              {#if item.battleType == 2}
                <td colspan="3" />
              {:else}
                <td>{rul.str('mode')}</td>
                <td>{rul.str('accuracy')}</td>
                <td>{rul.str('cost')}</td>
              {/if}
              <td>{rul.str('damage')}</td>
            </thead>
            {#each attacks as attack}
              <tr>
                {#if attack.mode == 'ammo'}
                  <td class="ammo-img">
                    <CanvasImage
                      src={rul.sprite(attack.item.sprite)}
                      maxWidth={32 * attack.item.invWidth}
                      maxHeight={32 * attack.item.invHeight}
                      zoom="2" />
                    <!--<img class="sprite" use:ammoSprite style="position:relative;" alt="X" src={rul.sprite(attack.item.sprite)}/>-->
                  </td>
                  <td colspan="2">
                    <Link href={attack.item.type} />
                    <br />
                    <small>
                      {rul.str('Shots')}: {attack.item.clipSize}
                      {rul.str('Wgt')}: {attack.item.weight}
                    </small>
                  </td>
                {:else}
                  <td>
                    {rul.str(attack.name)}{attack.shots == 1 ? '' : '×' + attack.shots}
                  </td>
                  <td>
                    <nobr>
                      <span>
                        <em class="big-number">{attack.accuracy}</em>
                        {'%'}
                      </span>

                      <span>
                        {#if attack.range}
                          {@html rul
                            .str('at N m')
                            .replace('N', `<em>${attack.range}</em>`)}
                        {/if}
                      </span>

                      <div>
                        <SpecialBonus bonus={attack.accuracyMultiplier} />
                      </div>
                    </nobr>
                  </td>
                  <td>
                    <nobr>
                      <em>{attack.cost.time}</em>
                      {attack.flatTime ? '' : '%'}
                      <small>{rul.str('TU')}</small>
                    </nobr>
                    {#each Object.keys(attack.cost) as res}
                      {#if res != 'time' && attack.cost[res] != 0}
                        <br />
                        <nobr>
                          <Value val={attack.cost[res]} />
                          <small>{rul.str(res)}</small>
                        </nobr>
                      {/if}
                    {/each}
                  </td>
                {/if}
                <td>
                  {#if 'damage' in attack || 'damageType' in attack}
                    <nobr>
                      {attack.pellets > 1 && attack.damageBonus ? '(' : ''}
                      <em>{attack.damage || 0}</em>
                      <small>
                        <SpecialBonus plus={true} bonus={attack.damageBonus} />
                        {attack.pellets > 1 && attack.damageBonus ? ')' : ''}
                      </small>
                      {attack.pellets > 1 ? ' ×' + attack.pellets : ''}
                    </nobr>
                    <br />
                    {#if attack.damageType}
                      <Link href={rul.damageTypes[attack.damageType]} />
                    {/if}
                  {/if}
                </td>
              </tr>

              {#if attack.mode == 'ammo' && attack.alter}
                <AlterList items={attack.alter} />
              {/if}
            {/each}
            {#if item.damageAlter && item.battleType != 2}
              <AlterList items={item.damageAlter} />
            {/if}
          </table>
        {/if}
      </div>

    </td>
  </tr>
{/if}

{#each Object.entries(item).sort((a, b) =>
  a[0] > b[0] ? 1 : -1
) as [key, prop]}
  {#if !['sprite', 'type', '_attacks', 'damageAlter'].includes(key)}
    <tr>
      <TableKey {key} />
      <td class="right-column">
        {#if ['requiresBuyBaseFunc'].includes(key)}
          <BaseServiceList items={prop} vertical={true} />
        {:else if ['manufacture', 'componentOf'].includes(key)}
          <table class="number-table">
            {#each Object.keys(prop) as field, i}
              <tr>
                <td>
                  <em>{prop[field]}</em>
                </td>
                <td>
                  <Link href={field} />
                </td>
              </tr>
            {/each}
          </table>
        {:else if ['damageBonus', 'meleeBonus', 'accuracyMultiplier', 'meleeMultiplier', 'closeQuartersMultiplier'].includes(key)}
          <SpecialBonus bonus={prop} />
        {:else if ['damageType', 'meleeType'].includes(key)}
          {rul.damageTypeName(prop)}
        {:else if key == 'battleType'}
          {prop}: {rul.str(rul.battleTypes[prop])}
        {:else if key.includes('Sound')}
          {#each soundsFrom(prop) as sound, i}
            {@html i > 0 ? '<br/>' : ''}
            <audio controls src={sound}>Audio tag not working</audio>
          {/each}
        {:else if ['floorSprite', 'handSprite'].includes(key)}
          <a style="vertical-align:top" href={rul.specialSprite(key, prop)}>
            {prop}
          </a>
          <img class="sprite" alt={prop} src={rul.specialSprite(key, prop)} />
        {:else}
          <Value val={prop} />
        {/if}
      </td>
    </tr>
  {/if}
{/each}
