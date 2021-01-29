function Pizza(size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.pizzaPrice = 10;
}

Pizza.prototype.pizzaCharge = function() {
  if (this.size === 'small 10"') {
    this.pizzaPrice;
  } else if (this.size === 'Medium 12"') {
    this.pizzaPrice += 2;
  } else if (this.size === 'Large 14"') {
    this.pizzaPrice += 4;
  } else {
    this.pizzaPrice += 6;
  }

  if (this.crust === 'Pan' || this.crust === 'Stuffed') {
    this.pizzaPrice += 2;
  } else {
    this.pizzaPrice;
  }

  
}