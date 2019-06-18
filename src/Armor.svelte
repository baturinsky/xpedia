<script>
  import { rul } from "./Ruleset";
  import Sprite from "./Sprite.svelte";

  export let armor;

  $: {console.log(armor)}
</script>

<Sprite path={rul.sprite(armor.spriteInv + "M0.SPK")} zoom="2"/>

<table>
  {#each Object.entries(armor).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as prop}
    <tr>
      <td>{rul.decamelize(prop[0])}</td>
      <td>{prop[1]}</td>
    </tr>
  {/each}
</table>
