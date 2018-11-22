const { setWorldConstructor } = require('cucumber')

/*class CustomWorld {
  constructor() {
    this.variable = 0
  }

  setTo(number) {
    this.variable = number
  }

  incrementBy(number) {
    this.variable += number
  }
}

setWorldConstructor(CustomWorld)
*/

class Product {
    constructor() {
        this.name = ""
    }

    setName(name){
        this.name = name
    }

    AddToList(product, list){
        list.add(product)
    }

}
setWorldConstructor(Product)