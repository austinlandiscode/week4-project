// function ClientLog() {
//   this.clients = {};
//   this.currentId = 0;
// }

// ClientLog.prototype.addClient = function(pizza) {
//   client.id = this.assignId();
//   this.clients[client.id] = client;
// }

// ClientLog.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// ClientLog.prototype.findClient = function(id) {
//   if (this.clients[id] != undefined) {
//     return this.clients[id];
//   }
//   return false;
// }

function Pizza(name, size, crust, sauce, cheese, meattoppings, othertoppings) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meattoppings = meattoppings;
  this.othertoppings = othertoppings;
  this.price = 10;
}

Pizza.prototype.pizzaCharge = function() {
  if (this.size === '10" Small') {
    this.price;
  } else if (this.size === '12" Medium') {
    this.price += 2;
  } else if (this.size === '14" Large') {
    this.price += 4;
  } else {
    this.price += 6;
  }
  return this.price
}

// let clientLog = new ClientLog();

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let name = $("input#name").val();
    let size = $("select#size").val();
    let crust = $("select#crust").val();
    let sauce = $("select#sauce").val();``
    let cheese = $("select#cheese").val();
    let meattoppings = $("select#meattoppings").val();
    let othertoppings = $("select#othertoppings").val();

    let newPizza = new Pizza(name, size, crust, sauce, cheese, meattoppings, othertoppings);
    // clientLog.addClient(newPizza);
    newPizza.pizzaCharge();
    $("#order").text(`Hey ${name}, you ordered a ${size} size pizza with ${crust} crust, ${sauce} sauce, ${cheese}, ${meattoppings}, and ${othertoppings}. That will be $${newPizza.price}!`)
  });
});