const miimagen = document.getElementById('imgpokemon');



async function buscarPokemon()
{
    let respuesta =
    await fetch(
        "https://pokeapi.co/api/v2/pokemon/ivysaur"
    );

    let pokemon =
    await respuesta.json();

    console.log(pokemon);
    console.log(pokemon.abilities[1].ability.name);
    console.log(pokemon.abilities[0].is_hidden);
    miimagen.src = pokemon.sprites.front_default;
}

buscarPokemon();