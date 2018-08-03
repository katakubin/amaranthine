var Amaranthine = Amaranthine || {}

Amaranthine.Event = {};

Amaranthine.Event.idlingTypes = [
  {
    type: 'IDLE',
    notification: 'neutral',
    text: 'Our hero just messing around with an ant... '
  },
  {
    type: 'IDLE',
    notification: 'neutral',
    text: 'Nothing new for today. Our hero seems fine. '
  },
  {
    type: 'IDLE',
    notification: 'neutral',
    text: 'Throwing some rocks into a puddle. '
  },
  {
    type: 'IDLE',
    notification: 'neutral',
    text: 'Seems like our hero just taking a long nap. '
  },
  {
    type: 'IDLE',
    notification: 'neutral',
    text: 'Our hero really like to clean up it\'s sword. '
  },
  {
    type: 'IDLE',
    notification: 'neutral',
    text: '"Trying a new food recipe seems good", thoughts from our hero. '
  },
  {
    type: 'IDLE',
    notification: 'neutral',
    text: 'Our hero really like a folk tale song. '
  },
  {
    type: 'IDLE',
    notification: 'neutral',
    text: 'Our hero busy counting the food stock. '
  },
];

Amaranthine.Event.eventTypes = [
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'health',
    value: 1,
    text: 'Because of it\'s clean attitude, our hero gain a extra health! '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'health',
    value: 3,
    text: 'Seize the day! Our hero gain health for it\'s daily routine. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'health',
    value: 5,
    text: 'Experimenting with it\'s body, in result of making our hero more healthier! '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'health',
    value: 7,
    text: 'Learning some alchemy aren\'t that bad. Thus our hero gain more health because of it\'s learning! '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'health',
    value: -2,
    text: 'Our hero got itself a stumbled toe for starting the day. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'health',
    value: -3,
    text: 'Cat aren\'t hero best friend. It learns it in a hard way. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'health',
    value: -4,
    text: 'It\'s not worthed to interrupt the bee for it\'s honey.. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'health',
    value: -6,
    text: 'Life lesson : never eat a half-rotten apple. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'health',
    value: -16,
    text: 'Those who said that salmon are better to be eaten raw.. they definitely lie about it. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'health',
    value: -25,
    text: 'Our hero accidentally steps on a bear\'s food, while the bear eating it. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'food',
    value: 1,
    text: 'Our hero trying to take a diet, by eating an ant for a whole day. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'food',
    value: 3,
    text: 'Food efficiency makes our hero more wise upon stockpiling. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'food',
    value: 5,
    text: 'Apple tree! Our hero so stocked about it. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'food',
    value: 10,
    text: 'Found a pond! Definitely a good time for fishing. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'food',
    value: -3,
    text: 'Our hero forgot to count it\'s food stock, in result of missing some food. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'food',
    value: -5,
    text: 'Seems like our hero are having a tough day. More food to waste. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'primary',
    stat: 'amalgam',
    value: 1,
    text: 'Our hero found an Amalgam! Might be useful. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'attack',
    value: 1,
    text: 'Training makes your attack more sharper than before! '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'attack',
    value: 2,
    text: 'By welding it\'s sword, our hero got itself a good result of it! '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'attack',
    value: 3,
    text: 'By welding the sword, our hero got itself a good result of it! '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'attack',
    value: -1,
    text: 'Layoffs aren\'t good for your body. Thus our hero lose some charm. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'money',
    value: 20,
    text: 'Bronze ore has a same value as our currency. Better keep it. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'money',
    value: 40,
    text: 'They said that an alumunium is quite a price nowadays. Better keep it. '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'money',
    value: -75,
    text: 'While our hero counts the remaining money, some of it runaway by a gust of wind. '
  },
  {
    type: 'STORE',
    notification: 'secondary',
    text: 'Our hero goes to a local store.',
    products: [
      {item: 'food', quantity: 20, price: 80},
      {item: 'amalgam', quantity: 1, price: 350},
      {item: 'attack', quantity: 2, price: 130},
      {item: 'health', quantity: 20, price: 80}
    ]
  },
  {
    type: 'STORE',
    notification: 'secondary',
    text: 'Our hero finds itself in a native store.',
    products: [
      {item: 'food', quantity: 40, price: 200},
      {item: 'amalgam', quantity: 1, price: 550},
      {item: 'attack', quantity: 1, price: 100},
      {item: 'health', quantity: 10, price: 50}
    ]
  },
  {
    type: 'STORE',
    notification: 'secondary',
    text: 'By some sight, our hero finds itself a village store to stock.',
    products: [
      {item: 'food', quantity: 10, price: 60},
      {item: 'attack', quantity: 3, price: 80},
      {item: 'health', quantity: 20, price: 70}
    ]
  },
  {
    type: 'STORE',
    notification: 'secondary',
    text: 'Seems like a gigantic store blocks our way. Time to check it out.',
    products: [
      {item: 'food', quantity: 80, price: 330},
      {item: 'amalgam', quantity: 3, price: 1000},
      {item: 'attack', quantity: 5, price: 410},
      {item: 'health', quantity: 40, price: 300}
    ]
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Our hero got ambushed by a Bandit!'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Our hero got ambushed by an Ex-Guard!'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Our hero got ambushed by a Slime!'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Our hero got ambushed by a Corrupted Feline!'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Our hero got ambushed by an Idleness!'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Our hero got ambushed by a Morphling!'
  },
  {
    type: 'NPC',
    notification: 'npc',
    item: 'food',
    quantity: '20',
    itemprize: 'money',
    valueprize: 200,
    text: 'Our hero stumble upon an old person who\'s looked starving. The person begs our hero to help it\'s hunger.'
  },
  {
    type: 'NPC',
    notification: 'npc',
    item: 'food',
    quantity: '10',
    itemprize: 'money',
    valueprize: 150,
    text: 'While counting the stock, our hero find itself a person who seems to gesture itself a food to beg. '
  },
];

Amaranthine.Event.generateEvent = function() {
  //Randomizing the Event
  var eventIndex = Math.floor(Math.random() * this.eventTypes.length);
  var eventData = this.eventTypes[eventIndex];
  
  //Events That Focused On Updating The Stats
  if(eventData.type == 'STAT-CHANGE') {
    this.stateChangeEvent(eventData);
  }
  
  else if(eventData.type == 'NPC') {
    //Pause The Game
    this.game.pauseJourney();
    
    //Notify User
    this.ui.notify(eventData.text, eventData.notification);
    
    //Prepare Event
    this.npcEvent(eventData);
  }
  
  //Store Mechanism
  else if(eventData.type == 'STORE') {
    //Pause The Game
    this.game.pauseJourney();
    
    //Notify User
    this.ui.notify(eventData.text, eventData.notification);
    
    //Prepare Event
    this.shopEvent(eventData);
  }
  
  //Attack Mechanism
  else if(eventData.type == 'ATTACK') {
    //Pause The Game
    this.game.pauseJourney();
    
    //Notify User
    this.ui.notify(eventData.text, eventData.notification);
    
    //Prepare Event
    this.attackEvent(eventData);
  }
};

Amaranthine.Event.generateIdle = function() {
  var eventIdle = Math.floor(Math.random() * this.idlingTypes.length);
  var idleInfo = this.idlingTypes[eventIdle];
  
  if(idleInfo.type == 'IDLE') {
    this.stateShowIdle(idleInfo);
  }
};

Amaranthine.Event.stateShowIdle = function(idleInfo){
  this.ui.notify(idleInfo.text, idleInfo.notification);
}

Amaranthine.Event.stateChangeEvent = function(eventData) {
  //No Negative Quantity
  if(eventData.value + this.adventure[eventData.stat] >= 0) {
    this.adventure[eventData.stat] += eventData.value;
    
    if(eventData.value >= 0)
    {
      this.ui.notify(eventData.text + "(" + eventData.stat + " +" + Math.abs(eventData.value) + ")", eventData.notification);
    }
    
    else this.ui.notify(eventData.text + "(" + eventData.stat + " -" + Math.abs(eventData.value) + ")", eventData.notification);
  }
};

Amaranthine.Event.npcEvent = function(eventData) {
  var text = eventData.text;
  var item = eventData.item;
  var quantity = eventData.quantity;
  var prob = Math.random();
  var itemprize = eventData.itemprize;
  var valueprize = eventData.valueprize;
  
  this.ui.showNpc(text,item,quantity,prob,itemprize,valueprize);
};

Amaranthine.Event.shopEvent = function(eventData) {
  //Showing The Product (Random Based)
  var numProds = Math.ceil(Math.random() * 4);
  
  //Product List
  var products = [];
  var j, priceFactor;
  
  for(var i = 0; i < numProds; i++) {
    //Random Product
    j = Math.floor(Math.random() * eventData.products.length);
    
    //Multiply The Price Based On Market Value
    priceFactor = 0.5 + 2.5 * Math.random();
    
    products.push({
      item: eventData.products[j].item,
      quantity: eventData.products[j].quantity,
      price: Math.round(eventData.products[j].price * priceFactor)
    });
  }
  
  this.ui.showStore(products);
};

//Preparing The Attack Sequence
Amaranthine.Event.attackEvent = function(eventData) {
  var result = Math.random();
  if(result >= 0.8) { 
  var attack = Math.round((1 + 1.2 * Math.random()) * Amaranthine.GAME_ENEMY_ATTACK_AVG); 
  var money = Math.round((0.2 + 0.8 * Math.random()) * Amaranthine.GAME_VALUE_AVG);
  }
  
  else if (result >= 0.6) { 
  var attack = Math.round((1 + 1.7 * Math.random()) * Amaranthine.GAME_ENEMY_ATTACK_AVG); 
  var money = Math.round((0.7 + 1.2 * Math.random()) * Amaranthine.GAME_VALUE_AVG);
  } 
  
  else if (result >= 0.3) { 
  var attack = Math.round((1 + 2.4 * Math.random()) * Amaranthine.GAME_ENEMY_ATTACK_AVG); 
  var money = Math.round((1.4 + 1.8 * Math.random()) * Amaranthine.GAME_VALUE_AVG);
  } 
  
  else { 
  var attack = Math.round((2 + 4.0 * Math.random()) * Amaranthine.GAME_ENEMY_ATTACK_AVG);
  var money = Math.round((3 + 2.8 * Math.random()) * Amaranthine.GAME_VALUE_AVG);
  }
  
  this.ui.showAttack(attack, money);
};