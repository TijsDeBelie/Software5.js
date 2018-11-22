//stepdefinitions in java
const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
/*
Given('a variable set to {int}', function(number) {
  this.setTo(number)
})

When('I increment the variable by {int}', function(number) {
  this.incrementBy(number)
})

Then('the variable should contain {int}', function(number) {
  expect(this.variable).to.eql(number)
})
*/


Given('a product set to {product}', function(product){
    this.setTo(product)
})

When('I add the {product} to the {list}', function(product, list) {
   this.AddToList(product, list)


})

Then('the {list} should contain the {product}', function(product, list){
    expect(list).includes(product)
})
