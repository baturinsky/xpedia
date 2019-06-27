<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import Armor from './Armor.svelte';

  export let unit;

  $: {console.log(unit)}

</script>

<table class="main-table">
  <tr> <td colspan="2" class="table-header">Unit</td> </tr>
  {#each Object.entries(unit).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    {#if !['type', 'deathSound', 'scripts'].includes(prop[0])}
      <tr>
        <td class="padding-right">{@html rul.decamelize(prop[0])}</td>
        <td>
          {#if false}
            -
          {:else if ['armor', 'psiWeapon', 'race', 'rank', 'meleeWeapon', 'civilianRecoveryType', 'spawnUnit'].includes(prop[0])}
            <Link href={prop[1]}/>
          {:else if prop[0] == "stats"}
            <table class="number-table">
              {#each Object.keys(prop[1]).sort() as field, i}
                <tr>
                  <td class="number-table1">{@html rul.decamelize(field)}</td>
                  <td class="number-table2">{prop[1][field]}</td>
                </tr>
              {/each}
            </table>
          {:else if ['builtInWeapons'].includes(prop[0])}
            {#each prop[1] as field, i}
              {#if i != 0}, {/if}
              <Link href={field}/>
            {/each}
          {:else if ['builtInWeaponSets'].includes(prop[0])}
            {#each Object.values(prop[1]) as set, i}
              {#if i != 0}<br/> {/if}
              {#each set as field, j}
                {#if j != 0}, {/if}
                <Link href={field}/>
              {/each}              
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

{#if unit.armor}
  <Armor armor={rul.armors[unit.armor]}/>
{/if}
