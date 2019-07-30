<script>
  import { rul } from "./Ruleset";
  import { Link, Intro, LinksPage, Value, LinksList, BaseServiceList } from "./Components";

  
  export let research;
  export let title = "Research"
  let longLists = ['seeAlso', 'requiresBaseFunc', 'manufacture', 'getOneFree', 'freeFrom', 'unlocks', 'dependencies', 'leadsTo', 'disables']

  $: {
    console.log(research);
  }
</script>

<style>
</style>

  <tr>
    <td colspan="2" class="table-header">Research</td>
  </tr>
  {#each Object.entries(research).sort((a, b) => (longLists.includes(b[0])?-10:10) + (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    {#if longLists.includes(key) && prop && prop.length>0}
      <tr><td colspan="2" class="table-subheader">{rul.decamelize(key)}</td></tr>
      <tr><td colspan="2" class="cols" style="columns:2;">
        <ul class="research-links">
          {#each prop as field, i}
            <li><Link href={field} /></li>
          {/each}
        </ul>
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
