import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { api, pokemonApi } from "./AxiosService.js"

class PokemonService {
    async getPokemon() {

        const res = await pokemonApi.get(`api/v2/pokemon`)
        console.log('got Pokemon', res.data.results);
        AppState.apiPokemon = res.data.results
        console.log('appSate', res.data.results);

    }



}

export const pokemonService = new PokemonService()