function Pizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCharge = function() {
  console.log(this.size);
  console.log(newPizza);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let size = $("#size option:selected").text();
    console.log(size);
    let crust = $("#crust option:selected").text();
    let sauce = $("#sauce option:selected").text();
    let cheese = $("#cheese .form-check:checked").text();
    console.log(cheese);
    let toppings = $("#pepperoni input:checked").text();
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
