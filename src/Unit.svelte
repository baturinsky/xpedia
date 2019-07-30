<script>
  import { rul } from "./Ruleset";
  import Armor from './Armor.svelte';

  import { Link, Intro, LinksPage, Value } from "./Components";
  

  export let unit;

  $: {console.log(unit)}

</script>

  <tr> <td colspan="2" class="table-header">Unit</td> </tr>
  {#each Object.entries(unit).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    {#if !['type', 'deathSound', 'scripts'].includes(key)}
      <tr>
        <td class="padding-right">{@html rul.decamelize(key)}</td>
        <td>
          {#if ['builtInWeaponSets'].includes(prop[0])}
            {#each Object.values(prop) as set, i}
              {#if i != 0}<br/> {/if}
              {#each set as field, j}
                {#if j != 0}, {/if}
                <Link href={field}/>
              {/each}              
            {/each}
          {:else}
            <Value val={prop}/>
          {/if}
        </td>
      </tr>
    {/if}
  {/each}
