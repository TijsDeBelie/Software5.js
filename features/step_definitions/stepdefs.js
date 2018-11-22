const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const code = require("../../code/code.js")



Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = code.isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});


Given('a product with name {string}', function (name){
    this.name = name
})

When('a customer adds the product to the order', function(){
    this.actualanswer = code.addProduct(this.name)
})

Then('I should see the {string} in my order', function(expectedAnswer){
    assert(this.actualanswer.includes(expectedAnswer))
})
  