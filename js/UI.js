var Amaranthine = Amaranthine || {};

Amaranthine.UI = {};

//Notification
Amaranthine.UI.notify = function(message, type){
  document.getElementById('updates-area').innerHTML = 
  '<div class="update-' + type + '">Day ' + Math.ceil(this.adventure.day) + 
  ': ' + message + '</div>' + document.getElementById('updates-area').innerHTML;
};

//Refresh Visual Stats
Amaranthine.UI.refreshStats = function() {
  //Modify DOM
  document.getElementById('stat-day').innerHTML = Math.ceil(this.adventure.day);
  document.getElementById('stat-distance').innerHTML = Math.ceil(this.adventure.distance);
  document.getElementById('stat-amalgam').innerHTML = Math.ceil(this.adventure.amalgam);
  document.getElementById('stat-food').innerHTML = Math.ceil(this.adventure.food);
  document.getElementById('stat-health').innerHTML = Math.ceil(this.adventure.health);
  document.getElementById('stat-money').innerHTML = Math.ceil(this.adventure.money);
  document.getElementById('stat-attack').innerHTML = Math.ceil(this.adventure.attack);

  //document.getElementById('adventure').style.left = (500 * this.adventure.distance/Amaranthine.GAME_FINAL_DISTANCE);
};

Amaranthine.UI.finalSequence = function() {
  document.getElementById('restart').classList.remove('hidden');
  
  document.getElementById('final-description').innerHTML = "Our Hero Survived Over " 
  + Math.ceil(this.adventure.day) + " Days, " + Math.ceil(this.adventure.distance)
  + " Distance, and " + Math.ceil(this.adventure.amalgam) + " Amalgam!";
  
  document.getElementById('game').classList.add('hidden');
  
};

//Show NPC
Amaranthine.UI.showNpc = function(text, item, quantity, prob, itemprize, valueprize){
  document.getElementById('npc').classList.remove('hidden');
  
  this.text = text;
  this.item = item;
  this.quantity = quantity;
  this.prob = prob;
  this.itemprize = itemprize;
  this.valueprize = valueprize;
    
  document.getElementById('npc-description').innerHTML = "Would you kindly help this person?";
  
  //Initialize (First Time)
    if(!this.npcInitiated) {
    
    //Fight Sequence
    document.getElementById('npcyes').addEventListener('click', this.npcyes.bind(this));
    
    //Runaway Sequence
    document.getElementById('npcno').addEventListener('click', this.npcno.bind(this));
    }
    
  this.npcInitiated = true;
};

//Yes-to-NPC Sequence
Amaranthine.UI.npcyes = function(){
  var text = this.text;
  var item = this.item;
  var quantity = this.quantity;
  var prob = this.prob;
  var itemprize = this.itemprize;
  var valueprize = this.valueprize;
  var damage = Math.round(2 + 1.8 * (2 * Math.random() / 0.5));
  
  if(prob > Amaranthine.GAME_EVENT_PROBABILITY + 5){
    if(itemprize == "food"){
      this.adventure.food += valueprize;
      this.notify('The person felt grateful, thus it\'s giving our hero a gift ' + '(+$' + valueprize + ')','positive');
    }
    
    else if(itemprize == "money"){
      this.adventure.money += valueprize;
      this.notify('The person felt grateful, thus it\'s giving our hero a gift ' + '(' + itemprize + ' +' + valueprize + ')','positive');
    }
  }
  
  else if(prob > (Amaranthine.GAME_EVENT_PROBABILITY / 2)){
    if(item == "food"){
      if(this.adventure.food <= quantity){
        this.adventure.food = 0;
        this.notify('The person thanks the hero, yet continuing it\'s journey ' + '(' + item + ' -' + quantity + ')', 'neutral');
      }
      else{
      this.adventure.food -= quantity;
      this.notify('The person thanks the hero, yet continuing it\'s journey ' + '(' + item + ' -' + quantity + ')', 'neutral');
      }
    }
    
    else if(item == "money"){
      if(this.adventure.money <= money){
        this.adventure.money = 0;
        this.notify('The person thanks the hero, yet continuing it\'s journey ' + '(' + item + ' -' + quantity + ')', 'neutral');
        }
        else{
        this.adventure.money -= quantity;
        this.notify('The person thanks the hero, yet continuing it\'s journey ' + '(' + item + ' -' + quantity + ')', 'neutral');
      }
    }
  }
  
  else{
    if(this.adventure.health > damage){
      if(item == "food"){
        if(this.adventure.food <= quantity){
          this.adventure.food = 0;
          this.adventure.health -= damage;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
        else{
          this.adventure.food -= quantity;
          this.adventure.health -= damage;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
      }
        
        else if(item == "money"){
          if(this.adventure.money <= money){
          this.adventure.money = 0;
          this.adventure.health -= damage;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
        else{
          this.adventure.money -= quantity;
          this.adventure.health -= damage;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
      }
    }
    
    else{
      if(item == "food"){
        if(this.adventure.food <= quantity){
          this.adventure.food = 0;
          this.adventure.health = 0;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
        
        else{
          this.adventure.food -= quantity;
          this.adventure.health = 0;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
      }
        
      else if(item == "money"){
        if(this.adventure.money <= money){
          this.adventure.money = 0;
          this.adventure.health = 0;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
          
        else{
          this.adventure.money -= quantity;
          this.adventure.health = 0;
          this.notify('With it\'s fake responds, the person stole the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
      }
    }
  }
  
  document.getElementById('npc').classList.add('hidden');
  this.game.resumeJourney();
};

//No-to-NPC Sequence
Amaranthine.UI.npcno = function(){
  var text = this.text;
  var item = this.item;
  var quantity = this.quantity;
  var prob = this.prob;
  var itemprize = this.itemprize;
  var valueprize = this.valueprize;
  var damage = Math.round(3 + 1.8 * (2 * Math.random() / 0.5));
  
  if(prob > 0.7){
    this.notify('The person understand your message. It\'s not easy for both of them to live in such a world.','positive');
  }
  
  else if(prob > 0.5){
    this.notify('While the person trying to encourage it\'s fear, with it\'s tough heart, the person thanks upon it\'s answers.','neutral');
  }
  
  else{
    if(this.adventure.health > damage){
      if(item == "food"){
        if(this.adventure.food <= quantity){
          this.adventure.food = 0;
          this.adventure.health -= damage;
          this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
        
        else{
          this.adventure.food -= quantity;
          this.adventure.health -= damage;
          this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
      }
      
      else if(item == "money"){
        if(this.adventure.money <= money){
          this.adventure.money = 0;
          this.adventure.health -= damage;
          this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
      }
        else{
          this.adventure.money -= quantity;
          this.adventure.health -= damage;
          this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
        }
      }
      
    else{
        if(item == "food"){
          if(this.adventure.food <= quantity){
            this.adventure.food = 0;
            this.adventure.health = 0;
            this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
          }
        
          else{
            this.adventure.food -= quantity;
            this.adventure.health = 0;
            this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
          }
        }
        
        else if(item == "money"){
          if(this.adventure.money <= money){
            this.adventure.money = 0;
            this.adventure.health = 0;
            this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
          }
        
          else{
            this.adventure.money -= quantity;
            this.adventure.health = 0;
            this.notify('Not accepting it\'s answer, the person forcefully robs the stock and injure our hero ' + '(' + item + ' -' + quantity + ' Health -' + damage + ')', 'negative');
          }
        }
      }
    }
  }
    
    document.getElementById('npc').classList.add('hidden');
    this.game.resumeJourney();
};

//Show Store
Amaranthine.UI.showStore = function(products){

  //Get Store Area
  var shopDiv = document.getElementById('shop');
  shopDiv.classList.remove('hidden');
  
  //Init The Shop (First Time)
  if(!this.shopInitiated) {
  
    //Event Delegation
    shopDiv.addEventListener('click', function(e) {
    
    var target = e.target || e.src;
    
      //Exit Button
      if(target.tagName == 'BUTTON') {
        shopDiv.classList.add('hidden');
        Amaranthine.UI.game.resumeJourney();
      }
      else if(target.tagName == 'DIV' && target.className.match(/product/)){
        
        console.log('buying')
        
        var bought = Amaranthine.UI.buyProduct({
        item: target.getAttribute('data-item'),
        quantity: target.getAttribute('data-quantity'),
        price: target.getAttribute('data-price')
        });
        
        if(bought){ target.html = ''; }
      }
    });
    
    this.shopInitiated = true;
  }
  
  //Clear Existing Content
  var prodsDiv = document.getElementById('prods');
  prodsDiv.innerHTML = '';
  
  //Show Products
  for(var i = 0; i < products.length; i++) {
    product = products[i];
    prodsDiv.innerHTML += '<div class="product" data-quantity="'
    + product.quantity + '" data-item="' + product.item +  '" data-price="'
    + product.price + '">' + product.quantity + ' ' + product.item + ' - $'
    + product.price + '</div>';
  }
};

Amaranthine.UI.buyProduct = function(product) {
  //Check If The User Can Bought It
  if(product.price > Amaranthine.UI.adventure.money) {
  Amaranthine.UI.notify('[Store Owner] : Not enough money.', 'negative');
  return false;
  }
  
  Amaranthine.UI.adventure.money -= product.price;
  Amaranthine.UI.adventure[product.item] += + product.quantity;
  Amaranthine.UI.notify('[Store Owner] : Thank you for your purchase!', 'positive');
  Amaranthine.UI.notify('Bought ' + product.quantity + 'x ' + product.item + '!', 'positive');
  
  //Update Visuals
  Amaranthine.UI.refreshStats();
  
  return true;
};

//Show The Attack
Amaranthine.UI.showAttack = function(attack, money) {
  var attackDiv = document.getElementById('attack');
  attackDiv.classList.remove('hidden');
  
  //Keep Properties
  this.attack = attack;
  this.money = money;
  
  document.getElementById('attack-description').innerHTML = 'Enemy Attack : ' + attack;
  
  //Initialize (First Time)
  if(!this.attackInitiated) {
  
  //Fight Sequence
  document.getElementById('fight').addEventListener('click', this.fight.bind(this));
  
  //Runaway Sequence
  document.getElementById('runaway').addEventListener('click', this.runaway.bind(this));
  }
  
  this.attackInitiated = true;
};

//Fight Mechanism
Amaranthine.UI.fight = function(){
  
  var attack = this.attack;
  var money = this.money;
  
  var damage = Math.ceil(Math.max(0, attack * 2 * Math.random() - this.adventure.attack));
  
  //Check Health
  if(damage < this.adventure.health) {
    if(damage <= this.adventure.attack) {
      this.adventure.health -= this.adventure.attack - damage;
      this.adventure.money += money;
      this.notify('Our hero suffers ' + damage + ' damage.', 'negative');
      this.notify('During the fight, our hero found some money ($' + money + ')!', 'positive');
    }
    else
    {
      this.adventure.health -= damage - this.adventure.attack;
      this.notify('Our hero suffers ' + damage + ' damage.', 'negative');
      this.notify('The enemy was too strong for our hero, thus the hero ran away', 'negative');
    }
  }
  else {
    this.adventure.health = 0;
    this.notify('Our hero dies in it\'s fight.', 'negative');
  }
  
  //Resume The Adventure
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
};

//Running Mechanism
Amaranthine.UI.runaway = function() {
  
  var attack = this.attack;
  var chance = Math.random();
  var damage = Math.ceil(Math.max(0, attack * Math.random()/2));
  
  //Check Health
  
  if(chance < Amaranthine.GAME_EVADE_PROBABILITY){
    if(damage < this.adventure.health) {
    this.adventure.health -= damage;
    this.notify('Our hero suffers ' + damage + ' damage during runaway.', 'negative');
    }
  }
  
  else if(this.adventure.health <= 0) {
    this.adventure.health = 0;
    this.notify('Our hero dies during it\'s runaway.', 'negative');
  }
  
  else { this.notify('Our hero succeded to runaway', 'positive'); }
  
  //Resume The Journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
};