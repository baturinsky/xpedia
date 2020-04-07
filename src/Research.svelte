<script>
  import { rul } from "./Ruleset";
  import { Link, Intro, LinksPage, Value, LinksList, BaseServiceList } from "./Components";

  
  export let research;
  export let title = rul.str("Research");
  let longLists = ['seeAlso', 'requiresBaseFunc', 'manufacture', 'getOneFree', 'freeFrom', 'unlocks', 'dependencies', 'leadsTo', 'disables']

  $: {
    console.log(research);
  }
</script>

  <tr class="table-header">
    <td colspan="2">{title}</td>
  </tr>
  {#each Object.entries(research).sort((a, b) => (longLists.includes(b[0])?-10:10) + (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    {#if longLists.includes(key) && prop && prop.length>0}
      <tr class="subtable"><td colspan="2">
          <div class="table-subheader">{rul.decamelize(key)}</div>
          <div class="cols" style="columns:2;">
          {#each prop as field, i}
            <div><Link href={field} /></div>
          {/each}
          </div>
      </td></tr>
    {:else if ['requiresBaseFunc' ].includes(key)}
      <BaseServiceList items={prop} vertical={true}/>
    {:else if key == 'getOneFreeProtected'}
      <tr><td colspan="2" class="table-subheader">{rul.decamelize(key)}</td></tr>
      {#each Object.keys(prop) as key}
      <tr><td><Link href={key}/></td><td><LinksList items={prop[key]}/></td></tr>
      {/each}
    {:else}
      {#if !['name'].includes(key)}
        <tr>        
            <td>
              {@html rul.decamelize(key)}
            </td>
            <td>
              <Value val={prop}/>
            </td>
        </tr>
        {/if}
    {/if}  
  {/each}
