var Backbone = require('backbone');

var Character = Backbone.Model.extend({
  injury: function(){
    this.set("health", this.get("health") - 10);
  },
  heal: function(){
    this.set("health", this.get("health") + 5);
  }
});

var CharacterCollection = Backbone.Collection.extend({
  model: Character,
  url: 'https://swapi.co/api/people/',
  parse: function(data){
    return data.results;
  }
});

module.exports = {
  'Character': Character,
  'CharacterCollection': CharacterCollection
};
