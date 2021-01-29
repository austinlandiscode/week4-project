function Pizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.pizzaPrice = 10;
}

Pizza.prototype.pizzaCharge = function() {
  console.log(this.size);
  console.log(newPizza);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let size = $("input#size").val();
    let crust = $("input#crust").val();
    let sauce = $("input#sauce").val();
    let cheese = $("#cheese").val();
    let toppings = $("#toppings").val();
    console.log(toppings);

    let newPizza = new Pizza(size, crust, sauce, cheese, toppings)
    console.log(newPizza);

  })
    
    function updateSum() {
    let total = 0;
    $(".sum:checked").each(function(i, n) {total += parseInt($(n).val());})
    $("#total").val(total);
  }
  // run the update on every checkbox change and on startup
  $(".sum").change(updateSum);
  updateSum();
});
