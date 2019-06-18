import Yaml from 'js-yaml'
import Ruleset from './Ruleset'
import App from './App.svelte';

function parseYaml(yamlText){
  let files = yamlText.split(/FILE:.*/g)
  let data = []
  for(let file of files){
    if(file.substr(1,3) == "п»ї")
      file = file.substr(4)
    let yaml = Yaml.load(file, {json: true})
    if(yaml)
      data.push(yaml)
  } 
  return data 
}

window.onload = function(){

  let yamlText = document.body.textContent
  let data = parseYaml(yamlText)

  const rul = new Ruleset(data)

	document.body.innerHTML = ""
	document.body.style.display = "block"

	app = new App({
		target: document.body
  });
  
  
}

export default app;