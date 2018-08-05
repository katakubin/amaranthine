var Amaranthine = Amaranthine || {};

Amaranthine.Adventure = {};

Amaranthine.Adventure.init = function(stats){
  this.day = stats.day;
  this.distance = stats.distance;
  this.amalgam = stats.amalgam;
  this.food = stats.food;
  this.health = stats.health;  
  this.money = stats.money;
  this.attack = stats.attack;
}

//Update Food
Amaranthine.Adventure.consumeFood = function() {
  this.food -= Amaranthine.GAME_FOOD_PER_DAY;
  
  if(this.food < 0) {
    this.food = 0;
  }
};

//Update Distance
Amaranthine.Adventure.updateDistance = function(){
  //The Speed Are Based On Randomizing & Food Consumption (Later)
  var diff = Math.random() * (3 * Math.random());
  var speed = Amaranthine.GAME_NORMAL_SPEED + diff * Amaranthine.GAME_FULL_SPEED;
  this.distance += speed;
};
