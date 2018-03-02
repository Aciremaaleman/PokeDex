$.ajax({
    url:`https://pokeapi.co/api/v2/pokemon/`,
    // para poner limite de resultados
    data: {limit:30}
}).done(handleResponse).fail(handleFailure)

var $containerPokemon = $('#sectionPokemon');

$( document ).ready(function() {
    // console.log( "ready!" );
    handleResponse();
    paintPokemon();    
});

// funcion en caso de que todo falle
function handleFailure () {
    console.log('Vuelve a intentar')
};

// funcion de respuesta
function handleResponse (data) {
    // console.log(data)
    // console.log(data.results)
    var $pokeData = data.results;
    paintPokemon($pokeData)
    // console.log($pokeData);
};


function paintPokemon($pokeData) {
    
    $pokeData.forEach(function (element){
        console.log(element);
        
        var $containerCaracters = $('<div></div>');
        var $pokeImage = $('<img></img>');
        // var $pokeUrl = $('<p></p>')
        var $pokeName = $('<p></p>');
        
        $pokeImage.attr("src","assets/images/pokemon.jpg");
        // $pokeUrl.attr(element.url)
        $pokeName.text(element.name);
        // console.log(pokeImage); 
        // console.log(pokeName); 
        
        $containerCaracters.addClass('pokeCont');
        $pokeImage.addClass('pokemonImg');
        $pokeName.addClass('pokemonName');
        
        $containerCaracters.append($pokeImage);
        $containerCaracters.append($pokeName);
        // $containerCaracters.append($pokeUrl);
        console.log($containerCaracters);
        
        $containerPokemon.append($containerCaracters);
    });
};

// pintar pokemones
// function paintPokemon(pokeData) {
//     let output;
//     pokeData.forEach(element => {
//         console.log(element)

//         output +=
//     `<figure>
//     <img src = "http://dummyimage.com/100x100/">
//     <figcaption>${element.name}</figcaption>
//     </figure>`
// });
// console.log(output);
// $containerPokemon.appendChild(output);
// };


