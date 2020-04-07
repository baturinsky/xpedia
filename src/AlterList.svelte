<script>
  import { rul } from "./Ruleset";
  import Value from "./Value.svelte";

  export let items;

  console.log("alter ", items);
</script>

<tr>
  <td colspan="4" class="attacks-alter">
    <small>
      {#each Object.keys(items).sort() as field, i}
        <div>
          <nobr>
            <span tooltip={'tip_' + field}>
              {@html rul.str(field)}
              {#if 'tip_' + field in rul.lang}
                <sup>?</sup>
              {/if}
              :
            </span>

            <Value val={items[field]} />

            {@html rul.lang[field + '_' + items[field]] || ''}
          </nobr>
        </div>
      {/each}
    </small>
  </td>
</tr>
