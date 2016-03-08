var Backbone = require('backbone');

var Character = Backbone.Model.extend({
  defaults: {
    minAttack: 0,
    maxAttack: 20,
    health: 100
  },
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
