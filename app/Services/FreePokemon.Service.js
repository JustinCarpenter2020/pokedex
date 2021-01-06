import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class FreePokemonService {
  async getAllPokemon() {
    let res = await pokeApi.get('')
    ProxyState.freePokemon = res.data.results
  }

  async getPokemon(name) {
    let res = await pokeApi.get(name)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}



export const freePokemonService = new FreePokemonService();