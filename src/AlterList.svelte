<script>
  import { rul } from "./Ruleset";
  import Value from "./Value.svelte";

  export let items;
</script>

<tr>
  <td colspan="4" class="attack-alter">
    <small>
      {#each Object.keys(items).sort() as field, i}
        <nobr>
          {rul.str(field)}:
          <Value val={items[field]} />
        </nobr>
        <br />
      {/each}
    </small>
  </td>
</tr>
