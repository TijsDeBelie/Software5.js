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

async function get(someUrl) {
  var request = require('request');
  var promise = new Promise(function (resolve, reject) {
    request.get(someUrl, function (err, res, body) {
      if (!err && res.statusCode === 200) {
        body = JSON.parse(body)
        //console.log('body:', body._embedded);
        resolve(Object.values(body._embedded))
      } else {
        reject(res.statusCode)
      }
    });
  });
return await promise;
}

async function post(input, someUrl) {
  var request = require('request');
  var promise = new Promise(function (resolve, reject) {
    request.post(someUrl, { json: true, body: input }, function (err, res, body) {
      if (!err && res.statusCode === 200) {
        resolve(Object.values(body._embedded))
      } else {
        reject(res.statusCode)
      }
    });
  });
return await promise;
}





module.exports = {
  isItFriday: isItFriday,
  addProduct: addProduct,
  countInArray: countInArray,
  get: get,
  post: post

}

