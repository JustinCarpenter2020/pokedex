import { ProxyState } from "../AppState.js";
import { freePokemonService } from "../Services/FreePokemon.Service.js";

function _drawPokemon(){
  let template = ''
  ProxyState.freePokemon.forEach(s => {
    template += `<ul class="action" onclick="app.freePokemonController.getPokemon('${s.name}')">${s.name}</ul>`
  })
  document.getElementById("free").innerHTML = template
}
function _drawActivePokemon(){
  let template = ''
  if (ProxyState.activePokemon) {
    template = ProxyState.activePokemon.Template
  }
  document.getElementById("active").innerHTML = template
}

export default class FreePokemonController{
  constructor(){
    ProxyState.on('freePokemon', _drawPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)
    this.getAllPokemon()
  }
  getAllPokemon(){
    try {
      freePokemonService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  getPokemon(name) {
    try {
      freePokemonService.getPokemon(name)
    } catch (error) {
      console.error(error)
    }
  }
}