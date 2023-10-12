import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawApiPokemon() {

    const pokemons = AppState.apiPokemon
    let content = ''
    pokemons.forEach(poke => content += `<div class="text-center mb-2">
    <button class="btn btn-info w-100">${poke.name}</button>
  </div>` )

    setHTML('pokemonList', content)

}

export class PokemonController {

    constructor() {
        console.log('loaded PM controller');
        this.getPokemon()

        AppState.on('apiPokemon', _drawApiPokemon)

    }

    async getPokemon() {

        try {
            await pokemonService.getPokemon()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }
}


// onclick="app.DNDSpellsController.getSpellByIndex('${spell.index}')"