function Pizza(size, crust, sauce, cheese, meattoppings, othertoppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meattoppings = meattoppings;
  this.othertoppings = othertoppings;
  this.price = 10;
}

Pizza.prototype.pizzaCharge = function() {
  if (this.size === 'Small 10"') {
    this.price;
  } else if (this.size === 'Medium 12"') {
    this.price += 2;
  } else if (this.size === 'Large 14"') {
    this.price += 4;
  } else {
    this.price += 6;
  }
  return this.price
}
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let size = $("select#size").val();
    let crust = $("select#crust").val();
    let sauce = $("select#sauce").val();
    let cheese = $("select#cheese").val();
    let meattoppings = $("select#meattoppings").val();
    let othertoppings = $("select#othertoppings").val();

    let newPizza = new Pizza(size, crust, sauce, cheese, meattoppings, othertoppings)
    console.log(newPizza);
    newPizza.pizzaCharge();
    $("#order").text(`You ordered a ${size} pizza with ${crust} crust, ${sauce} sauce, ${cheese}, ${meattoppings}, and ${othertoppings}.`)
  })
});
