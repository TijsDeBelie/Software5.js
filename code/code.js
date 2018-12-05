
async function getDesigns(someUrl) {
  var request = require('request');
  var promise = new Promise(function (resolve, reject) {
    request.get(someUrl, function (err, res, body) {
      if (!err && res.statusCode == 200 || res.statusCode == 201) {
        body = JSON.parse(body);
        resolve(body._embedded.designs.map(function(o) { return o.titel; }))
      } else {
        reject(err);
      }
    });
  });
return await promise;
}

async function getProducts(someUrl) {
  var request = require('request');
  var promise = new Promise(function (resolve, reject) {
    request.get(someUrl, function (err, res, body) {
      if (!err && res.statusCode === 200 || res.statusCode == 201) {
        body = JSON.parse(body);
        resolve(body._embedded.products.map(function(o) { return o.naam }));
      } else {
        reject(err);
      }
    });
  });
return await promise;
}

async function post(input, someUrl) {
  var request = require('request');
  var promise = new Promise(async function (resolve, reject) {
    request.post(someUrl, { json: true, body: input }, async function (err, res, body) {
      if (!err && res.statusCode == 200 || res.statusCode == 201) {
        resolve("Gelukt");
      } else {
        reject(err);
      }
    });
  });
return await promise;
}





module.exports = {
  getDesigns: getDesigns,
  getProducts : getProducts,
  post: post

};
