$( ()=>{
  // const search = $('#search');

  // $.getJSON("assets/js/endpoint-all.js", function(data) {
  //   console.log(data);

  var json = $.getJSON("http://pokeapi.co/api/v2/pokedex/1/", function(data){
    console.log(data);
  });
  var jsonName = $.getJSON("http://pokeapi.co/api/v2/pokedex/1/", function(data2){
    console.log(data2.pokemon_entries[0].pokemon_species.name);
  });
});
