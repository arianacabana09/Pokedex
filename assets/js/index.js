const state = {
  stations: null,
  selectedStation: null
};

$( ()=>{

  var json = $.getJSON("http://pokeapi.co/api/v2/pokemon-species/1/", function(data){
    console.log(data);
  });

  var json = $.getJSON("http://pokeapi.co/api/v2/pokedex/1/", function(data){
    console.log(data);
  });

  //nombre
  var jsonName = $.getJSON("http://pokeapi.co/api/v2/pokedex/1/", function(data2){
    console.log(data2.pokemon_entries[0].pokemon_species.name);
  });
// descriopcion
  var jsonName = $.getJSON("http://pokeapi.co/api/v2/pokemon-species/1/", function(data2){
    console.log(data2.flavor_text_entries[3].flavor_text);
  });

  // categoria
  var jsonName = $.getJSON("http://pokeapi.co/api/v2/pokemon-species/1/", function(data3){
    console.log(data3.genera[2].genus);
  });
// weight

});
