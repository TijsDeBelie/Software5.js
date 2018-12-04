const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const code = require("../../code/code.js")
const { driver } = require('../support/web_driver');

//SCENARIO LOGIN

Given('the user is on the web site {string}', async function (arg1) {
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
    let result = await driver.getCurrentUrl()
    //driver.findElement({ className: "error" }).getText()
    return assert.equal(result, 'http://localhost:8080/index.html', "Failed to login!");
});


//SCENARIO ADD_DESIGN
Given('no design with titel {string} exists', async function (arg1) {
    let result = await code.getDesigns("http://localhost:8082/designs")
    return assert.equal(result.includes(arg1), false);
});
When('an user adds the new design with titel {string} and beschrijving {string} and name {string} to the designstable\'', async function (arg1, arg2, arg3) {
    let result = await code.post({
        "titel": arg1,
        "beschrijving": arg2,
        "designerNaam": arg3
    }, "http://localhost:8082/designs")
    return result;
});
Then('I should see the {string} in my designstable', async function (arg1) {
    let result = await code.getDesigns("http://localhost:8082/designs");
    return assert.equal(result.includes(arg1), true);
});





//ADD_PRODUCT

Given('no product with name {string} exists', async function (string) {
    let result = await code.getProducts("http://localhost:8081/products")
    return assert.equal(result.includes(string), false);
  });

  When('an user adds the new product with name {string} and price {int} to the productstable', async function (string, int) {
    let result = await code.post({
        "score": 0,
        "naam": string,
        "prijs": int
    }, "http://localhost:8081/products")
    return result;
  });

  
  Then('I should see the {string} in my productstable', async function (string) {
    let result = await code.getProducts("http://localhost:8081/products");
    return assert.equal(result.includes(string), true);
  });