function Pizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.pizzaPrice = 10;
}

Pizza.prototype.pizzaCharge = function() {
  if (this.size === 'small 10"') {
    this.pizzaPrice;
  } else if (this.size === 'Medium 12" + $2') {
    this.pizzaPrice += 2;
  } else if (this.size === 'Large 14" + $4') {
    this.pizzaPrice += 4;
  } else {
    this.pizzaPrice += 6;
  }

  if (this.crust === 'Pan' || this.crust === 'Stuffed') {
    this.pizzaPrice += 2;
  } else {
    this.pizzaPrice;
  }

  if (this.sauce) {
    this.pizzaPrice;
  }
  
  if (this.cheese === value("2")) {
    this.pizzaPrice += 2;
  } else if (this.cheese === value("4")) {
    this.pizzaPrice += 4;
  } else if (this.cheese === value("6")) {
    this.pizzaPrice += 6;
  } else {
    this.pizzaPrice;
  }

  if (this.toppings === value("1")) {
    this.pizzaPrice += 1;
  } else if (this.toppings === value("2")) {
    this.pizzaPrice += 2;
  } else if (this.toppings === value("3")) {
    this.pizzaPrice += 3;
  } else if (this.toppings === value("4")) {
    this.pizzaPrice += 4;
  } else if (this.toppings === value("5")) {
    this.pizzaPrice += 5;
  } else if (this.toppings === value("6")) {
    this.pizzaPrice += 6;
  } else if (this.toppings === value("7")) {
    this.pizzaPrice += 7;
  } else if (this.toppings === value("8")) {
    this.pizzaPrice += 8;
  } else if (this.toppings === value("9")) {
    this.pizzaPrice += 9;
  } else if (this.toppings === value("10")) {
    this.pizzaPrice += 10;
  } else if (this.toppings === value("11")) {
    this.pizzaPrice += 11;
  } else if (this.toppings === value("12")) {
    this.pizzaPrice += 12;
  } else if (this.toppings === value("13")) {
    this.pizzaPrice += 13;
  } else if (this.toppings === value("14")) {
    this.pizzaPrice += 14;
  } else if (this.toppings === value("15")) {
    this.pizzaPrice += 15;
  } else if (this.toppings === value("16")) {
    this.pizzaPrice += 16;
  } else if (this.toppings === value("17")) {
    this.pizzaPrice += 17;
  } else {
    this.pizzaPrice;
  }
}

$(document).ready(function() {
  function updateSum() {
    let size = $("input#size").val();
    let crust = $("input#crust").val();
    let sauce = $("input#sauce").val();
    let cheese = $("#cheese").val();
    let toppings = $("#toppings").val();
    let total = 0;
    $(".sum:selected").each(function(i, n) {total += parseInt($(n).val());})
    $(".sum:checked").each(function(i, n) {total += parseInt($(n).val());})
    $("#total").val(total);
  }
  // run the update on every checkbox change and on startup
  $("input.sum").change(updateSum);
  updateSum();

  // $("form#toppings").submit(function(event) {
  //   event.preventDefault();
})
// })