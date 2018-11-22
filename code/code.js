function isItFriday(today) {
    if (today === "Friday") {
      return "TGIF";
    } else {
      return "Nope";
    }
}
var list = []
function addProduct(name){
    list.push(name)
return list
}


module.exports = {
isItFriday : isItFriday,
addProduct : addProduct


}