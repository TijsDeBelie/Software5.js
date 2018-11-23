function isItFriday(today) {
    if (today === "Friday") {
      return "TGIF";
    } else {
      return "Nope";
    }
}

function addProduct(name, quantity){
  var list = []
  for (var i = 0; i < quantity; i++) list.push(name);
return list
}

function countInArray(array, what) {
  return array.filter(item => item == what).length;
}


module.exports = {
isItFriday : isItFriday,
addProduct : addProduct,
countInArray : countInArray


}