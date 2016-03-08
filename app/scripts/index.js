var $ = require('jquery');

var models = require('./models/characters');
var starWarsChars = new models.CharacterCollection();

var characterView = {
  clear: function(){
    $('.container').html('');
  },
  render: function(character){
    $('.container').append('<div>' + character.get("name") + ': ' + character.get("health") + '</div>');
  }
}

// Fetch is used to populate a collection from an api
// Remember this is still async so you need to use a callback or promise
starWarsChars.fetch().done(function(){

  // Collections can be iterated over, each item in the collection is a model
  starWarsChars.each(function(starWarsPerson){

    characterView.render(starWarsPerson);

    // Use an event listener on the model
    // This listens for changes to the health property of the character model
    starWarsPerson.on('change:health', function(model, value){
      $('.container').append('<div>' + model.get("name") + ': ' + model.get("health") + '</div>');
    });

    setTimeout(function(){
      starWarsPerson.injury();
    }, 3000);
  });

  setTimeout(function(){
    characterView.clear();
  }, 2000);
});
