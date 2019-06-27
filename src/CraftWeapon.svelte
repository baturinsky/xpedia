<script>
  import { rul } from "./Ruleset";
  import Link from "./Link.svelte";
  import ItemList from "./ItemList.svelte";
  import Illustration from "./Illustration.svelte";
  import Item from "./Item.svelte";

  export let weapon;

  $: {
    console.log(weapon);
  }
</script>

<style>
.panels3 td{
  padding-right:10px;
  vertical-align: top;
}
</style>

<table class="panels3">
  <tr>
    <td>
      <table class="main-table">
        <tr>
          <td colspan="2" class="table-header">Weapon</td>
        </tr>
        {#each Object.entries(weapon).sort((a, b) =>
          a[0] > b[0] ? 1 : -1
        ) as prop}
          {#if !['type'].includes(prop[0])}
            <tr>
              <td class="padding-right">
                {@html rul.decamelize(prop[0])}
              </td>
              <td>
                {#if ['launcher', 'clip'].includes(prop[0])}
                  <Link href={prop[1]} />
                {:else if prop[1] instanceof Object}
                  {#each Object.keys(prop[1]).sort() as field, i}
                    {#if i != 0},{/if}
                    {@html rul.decamelize(field) + ":&nbsp;" + rul.decamelize(prop[1][field])}
                  {/each}
                {:else}{prop[1]}{/if}
              </td>
            </tr>
          {/if}
        {/each}
      </table>
    </td>
    <td>
    {#if weapon.launcher}
      <Item item={rul.items[weapon.launcher]} title={"Launcher: " + rul.str(weapon.launcher)}/>
    {/if}
    {#if weapon.clip}
      <Item item={rul.items[weapon.clip]} title={"Clip: " + rul.str(weapon.clip)}/>
    {/if}
    </td>
  </tr>
</table>
