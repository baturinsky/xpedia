<script>
  import { rul } from "./Ruleset";
  import LinksPage from "./LinksPage.svelte";  

  export let conditions;
</script>

<style>
</style>

<LinksPage links={conditions.allowedCraft} title={rul.str("Allowed Craft")}/>

<LinksPage links={conditions.allowedItemCategories} title={rul.str("Allowed Item Categories")}/>

<LinksPage links={conditions.allowedArmors} title={rul.str("Allowed Armors")}/>

<!--<LinksPage links={rul.ourArmors.filter(a => !conditions.allowedArmors.includes(a))} title={rul.str("Banned Armors")}/>-->

<LinksPage links={conditions.allowedVehicles} title={rul.str("Allowed Vehicles")}/>

<LinksPage links={conditions.deployments} title={rul.str("Deployments")}/>