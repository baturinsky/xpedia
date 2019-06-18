<script>
  export let bonus;
  let flat = [];
  for (let type of Object.keys(bonus)) {
    if (bonus[type].length) {
      for (let power in bonus[type]) {
        let b = bonus[type][power];
        if (b != 0) {
          power = power * 1 + 1;
          flat.push([type + (power == 1 ? "" : "<sup>" + power + "</sup>"), b]);
        }
      }
    } else {
      if(bonus[type] != 0)
        flat.push([type, bonus[type]]);
    }
  }
</script>

{#each flat as b, i}
  {#if i != 0} +{/if}
  {@html b[0] +'×' + b[1]}
{/each}
