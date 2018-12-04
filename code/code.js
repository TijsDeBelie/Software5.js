function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

function addProduct(name, quantity) {
  var list = []
  for (var i = 0; i < quantity; i++) list.push(name);
  return list
}

function countInArray(array, what) {
  return array.filter(item => item == what).length;
}

async function getDesigns(someUrl) {
  var request = require('request');
  var promise = new Promise(function (resolve, reject) {
    request.get(someUrl, function (err, res, body) {
      if (!err && res.statusCode === 200 || res.statusCode == 201) {
        body = JSON.parse(body)
        console.log("================================================================")
        console.log(body._embedded.designs.map(function(o) { return o.titel; }));
        
        console.log("================================================================")
        resolve(body._embedded.designs.map(function(o) { return o.titel; }))
      } else {
        reject(err)
      }
    });
  });
return await promise;
}

async function post(input, someUrl) {
  var request = require('request');
  var promise = new Promise(function (resolve, reject) {
    request.post(someUrl, { json: true, body: input }, function (err, res, body) {
      if (!err && res.statusCode === 200 || res.statusCode == 201) {
        resolve("Gelukt")
      } else {
        reject(err)
      }
    });
  });
return await promise;
}





module.exports = {
  isItFriday: isItFriday,
  addProduct: addProduct,
  countInArray: countInArray,
  getDesigns: getDesigns,
  post: post

}

