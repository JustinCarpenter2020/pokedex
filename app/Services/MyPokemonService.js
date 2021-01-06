import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService {
 async getAllPokemon() {
    let res = await sandboxApi.get('')
    ProxyState.myPokemon = res.data.map(s => new Pokemon(s))
  }
  getPokemon(id){
  let pokemon = ProxyState.myPokemon.find(s => s.id === id)
  ProxyState.activePokemon = pokemon
  }
  async addPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)

    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
  }
  async removePokemon() {
    let res = await sandboxApi.delete(ProxyState.activePokemon.name)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(s => s.name !== ProxyState.activePokemon.name)
    ProxyState.activePokemon= null
  }

}



export const myPokemonService = new MyPokemonService();