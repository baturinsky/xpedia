import Ruleset from './Ruleset'
import App from './App.svelte';

window.onload = function(){

  new Ruleset(document.body.textContent, () => {
    console.log(123);
    document.body.innerHTML = ""
    document.body.style.display = "block"

    app = new App({
      target: document.body
    });
  })
    
}

export default app;