const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const code = require("../../code/code.js")
const { driver } = require('../support/web_driver');


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

When('a customer adds the product {int} times to the order', function(quantity){
    this.actualanswer = code.addProduct(this.name, quantity)
})

Then('I should see the {string} {int} times in my order', function(expectedAnswer, quantity){
    assert.equal(code.countInArray(this.actualanswer, expectedAnswer),quantity)
})





Given('Browse to the web site {string}', async function (arg1) {
    return driver.get(arg1);
});

When('a user clicks on the username field', async function () {
    return driver.findElement({ id: "username" }).click();
    
});

When('the user fills in a correct username {string}', async function (username) {
    return driver.findElement({ id: "username" }).sendKeys(username);
});

When('clicks on the password field', async function () {

    return driver.findElement({ id: "password" }).click();
});

When('the user fills in a correct password {string}', async function (password) {
    return driver.findElement({ id: "password" }).sendKeys(password);
});
When('the user clicks on the login button', async function () {
  return driver.findElement({ className: "btn btn-primary btn-md" }).click();
});

Then('the user is logged in', async function () {
    let result = driver.findElement({ id: "error" }).getText()
    return assert.ok(result == null)
});