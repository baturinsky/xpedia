<script>
  import { rul } from "./Ruleset";
  import { Link, LinksPage, Value } from "./Components";  
  import Item from "./Item.svelte"

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
                <Value val={prop[1]} />
              </td>
            </tr>
          {/if}
        {/each}
      </table>
    </td>
    <td>
    <table class="main-table">
    {#if weapon.launcher}
      <Item item={rul.items[weapon.launcher]} title={"Launcher: " + rul.str(weapon.launcher)}/>
    {/if}
    {#if weapon.clip}
      <Item item={rul.items[weapon.clip]} title={"Clip: " + rul.str(weapon.clip)}/>
    {/if}
    </table>
    </td>
  </tr>
</table>
