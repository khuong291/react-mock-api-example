var jsf = require('json-schema-faker');
var mockDataSchema = require('./mockDataSchema');
var fs = require('fs');

var json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile("./src/api/db.json", json, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
