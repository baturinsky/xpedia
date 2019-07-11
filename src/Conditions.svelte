<script>
  import { rul } from "./Ruleset";
  import LinksList from "./LinksList.svelte";  

  export let conditions;
</script>

<style>
</style>

<LinksList links={conditions.allowedCraft} title={rul.str("Allowed Craft")}/>

<LinksList links={conditions.allowedItemCategories} title={rul.str("Allowed Item Categories")}/>

<LinksList links={conditions.allowedArmors} title={rul.str("Allowed Armors")}/>

<!--<LinksList links={rul.ourArmors.filter(a => !conditions.allowedArmors.includes(a))} title={rul.str("Banned Armors")}/>-->

<LinksList links={conditions.allowedVehicles} title={rul.str("Allowed Vehicles")}/>

<LinksList links={conditions.deployments} title={rul.str("Deployments")}/>

