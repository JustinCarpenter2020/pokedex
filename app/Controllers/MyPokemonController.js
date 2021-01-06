import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js";

function _drawPokemon(){
  let template = ''
  ProxyState.myPokemon.forEach(pokemon => {
    template += `<ul class="action" onclick="app.myPokemonController.getPokemon('${pokemon.id}')">${pokemon.name}</ul>`
  })
  document.getElementById('my-pokemon').innerHTML = template
}


export default class MyPokemonController{
constructor(){
  ProxyState.on('myPokemon', _drawPokemon)

  this.getAllPokemon()
}

getAllPokemon(){
  try {
    myPokemonService.getAllPokemon()
  } catch(error){
    console.error(error)
  }
}
getPokemon(){
  myPokemonService.getAllPokemon()
}

addPokemon(){
  try{
    myPokemonService.addPokemon()
  } catch (error) {
  console.error(error)
  }
}

removePokemon(){
  try{
    myPokemonService.removePokemon()
  } catch (error){
    console.error(error)
  }
}
}