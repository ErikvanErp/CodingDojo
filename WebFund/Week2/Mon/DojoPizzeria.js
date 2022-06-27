function pizzaOven(crustType, sauceType, cheeses, toppings){
    pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;    
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "tomato", "mozzarella", ["mushrooms", "olives"]);
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);

function randomPizza(){
    pizza = {};
    rand = [];
    for(var i=0; i<4; i++){
        rand[i] = Math.floor(Math.random() * 2) ;
    }
   
    if(rand[0] == '0'){
        pizza.crustType = 'thin';
    } else {
        pizza.crustType = 'hand tossed';
    }
    
    if(rand[1] == '0'){
        pizza.sauseType = 'marinara';
    } else {
        pizza.sauceType = 'traditional';
    }

    if(rand[2] == '0'){
        pizza.cheeses = 'mozzarella';
    } else {
        pizza.cheeses = 'feta';
    }

    if(rand[3] == '0'){
        pizza.toppings = ["mushrooms", "sausage"];
    } else {
        pizza.toppings = ["olives", "pepperoni"];
    }

    return pizza;    
}
randomPizza();
console.log(pizza)