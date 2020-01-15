<script>
  import { rul } from "./Ruleset";
  
  export let key;
</script>

<td>
  <div tooltip={'tip_' + key}>
    {@html rul.decamelize(key)}
    {#if 'tip_' + key in rul.lang}
      <sup>?</sup>
    {/if}
  </div>
</td>
