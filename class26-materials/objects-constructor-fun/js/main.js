//Create a constructor with 4 properties and 3 methods
function PizzaMachine (pizzaCrust, pizzaSauce, pizzaToppings, pizzaBrand) {

    this.crust = pizzaCrust;
    this.sauce = pizzaSauce;
    this.toppings = pizzaToppings;
    this.brand = pizzaBrand;

    pizzaBrand.makeDough = function (){

    }

    pizzaBrand.assemble = function(){

    }

    pizzaBrand.heat = function() {

    }
}

let pizza = new PizzaMachine('Stuffed', 'Hot garlic', ['paneer', 'mushrooms', 'olives'], 'Dominoes');