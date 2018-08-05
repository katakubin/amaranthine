  var Amaranthine = Amaranthine || {};

  //constants
  Amaranthine.GAME_DAY_PER_STEP = 1;
  Amaranthine.GAME_DISTANCE_FINAL = 2000;
  Amaranthine.GAME_AMALGAM_FINAL = 10;
  Amaranthine.GAME_SPEED = 780;
  Amaranthine.GAME_FOOD_PER_DAY = 1;
  Amaranthine.GAME_HEALTH_AVG = 100;
  Amaranthine.GAME_ATTACK_AVG = 10;
  Amaranthine.GAME_NORMAL_SPEED = 1;
  Amaranthine.GAME_FULL_SPEED = 3;
  Amaranthine.GAME_EVENT_PROBABILITY = 0.80;
  Amaranthine.GAME_ATTACK_EFFICIENCY = 0.20;
  Amaranthine.GAME_EVADE_PROBABILITY = 0.50;
  Amaranthine.GAME_ENEMY_ATTACK_AVG = 10;
  Amaranthine.GAME_ENEMY_HEALTH_AVG = 50;
  Amaranthine.GAME_VALUE_AVG = 30;

  Amaranthine.Game = {};
  
  //initialize
  Amaranthine.Game.init = function(){

    //UI Config
    this.ui = Amaranthine.UI;
    
    //Event Config
    this.eventManagement = Amaranthine.Event;
    
    //Game Setup
    this.adventure = Amaranthine.Adventure;
    this.adventure.init({
    day: 0,
    distance: 0,
    amalgam: 0,
    food: 50,
    health: 100,
    attack: 20,
    money: 50
    });
    
    //Update / Passing References
    this.adventure.ui = this.ui;
    this.adventure.eventManagement = this.eventManagement;
    
    this.ui.game = this;
    this.ui.adventure = this.adventure;
    this.ui.eventManagement = this.eventManagement;
    
    this.eventManagement.game = this;
    this.eventManagement.adventure = this.adventure;
    this.eventManagement.ui = this.ui;
    
    //Start The Adventure
    
    this.startAdventure();
  };

  //Start The Game and The Sequence
  Amaranthine.Game.startAdventure = function() {
    this.gameActive = true;
    this.previousTime = null;
    this.ui.notify('A young hero adventure has begun...', 'positive');
    
    this.step();
  };

  //Manage The Sequence
  Amaranthine.Game.step = function(timestamp){
    
    //Setting The Time Gap
    if(!this.previousTime){
      this.previousTime = timestamp;
      this.updateGame();
    };
    
    //Setting The Time Diff
    var progress = timestamp - this.previousTime;
    
    //Updating The Sequence
    if(progress >= Amaranthine.GAME_SPEED){
      this.previousTime = timestamp;
      this.updateGame();
    };
    
    //Animation Sequence
    if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
  };

  //Update The Game Based On The Cycle
  Amaranthine.Game.updateGame = function() {
    //Update Stats
    this.ui.refreshStats();
    
    //Day Update
    this.adventure.day += Amaranthine.GAME_DAY_PER_STEP;
    
    //Food Update
    this.adventure.consumeFood();
    
    //If Hero Has 0 Food, Do This Sequence
    if(this.adventure.food === 0) {
      this.ui.notify('Sadly, our young hero died because of starvation.', 'negative');
      this.gameActive = false;
      Amaranthine.UI.finalSequence();
      document.getElementById('cause').innerHTML = '<br><p class="uk-text-center"> Cause Of Death : <b class="uk-text-danger">Starvation<b><p>';
    };
    
    //Distance Update
    this.adventure.updateDistance();
    
    //Health Update
    if(this.adventure.health >= 100){
      this.adventure.health = 100;
    }
    
    if(this.adventure.health <= 0){
      this.adventure.health = 0;
      this.ui.notify('Tragically, our young hero died on it\'s adventure.','negative');
      this.gameActive = false;
      Amaranthine.UI.finalSequence();
      document.getElementById('cause').innerHTML = '<br><p class="uk-text-center"> Cause Of Death : <b class="uk-text-danger">Lack of Health<b><p>';
    };
    
    //Winning The Game (based on Distance)
    if(this.adventure.distance >= Amaranthine.GAME_DISTANCE_FINAL)
    {
      this.ui.notify('By it\'s hope and strength, our young hero finally find itself a place to serve it\'s kind.');
      this.gameActive = false;
      Amaranthine.UI.finalSequence();
    };
    
    //Winning The Game (based on Amalgam)
    if(this.adventure.amalgam >= Amaranthine.GAME_AMALGAM_FINAL)
    {
      this.ui.notify('With the power of Amalgam, our brave hero find itself a heaven to stay.')
      this.gameActive = false;
      Amaranthine.UI.finalSequence();
    };
    
    //Events Update
    if(Math.random() + 0.10 < Amaranthine.GAME_EVENT_PROBABILITY) {
      this.eventManagement.generateEvent();
    }
    
    else {
      this.eventManagement.generateIdle();
    }
  };

  //Pause The Game
  Amaranthine.Game.pauseJourney = function() {
    this.gameActive = false;
  };
    
  //Resume The Game
  Amaranthine.Game.resumeJourney = function() {
    this.gameActive = true;
    this.step();
  };

  //Init
  Amaranthine.Game.init();
  