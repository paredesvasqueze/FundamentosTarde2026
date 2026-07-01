async function buscarPokemon()
{
    let respuesta =
    await fetch(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
    );

    let pokemon =
    await respuesta.json();

    console.log(pokemon);
}

buscarPokemon();