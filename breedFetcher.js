const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
     return callback(Error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
     return callback(Error, null);
    }
    callback(null, breed.description);
  });
}

module.exports = { fetchBreedDescription };