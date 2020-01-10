import Ruleset from "./Ruleset";
import App from "./App.svelte";

function unescape(s) {
  let lookup = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">"
  };
  return s.replace(/&amp;|&quot;|&lt;|&gt;/g, c => lookup[c]);
}

window.onload = function() {
  let rulesText = unescape(document.body.textContent);
  document.body.innerHTML = "";
  document.body.style.display = "block";

  new Ruleset();
  app = new App({
    props: { source: rulesText },
    target: document.body
  });
};

export default app;
