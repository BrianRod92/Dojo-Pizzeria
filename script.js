function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("cheese stuffed", "marinara", ["vegan mozzarella"], ["spinach", "soy bacon"])
var p4 = pizzaOven("hand tossed", ["marinara", "basil"], ["vegan mozzarella", "vegan American"], ["buffalo soy chicken", "spinach"])

console.log(p1, p2, p3, p4);

