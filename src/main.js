import Ruleset from './Ruleset'
import App from './App.svelte';

window.onload = function(){

  let rulesText = document.body.textContent
  document.body.innerHTML = ""
  document.body.style.display = "block"

  new Ruleset()
  app = new App({
    props: {source: rulesText},
    target: document.body
  });
    
}

export default app;