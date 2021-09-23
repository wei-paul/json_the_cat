fs = require('fs'); //require the built-in library "file system"
let searchTerm = process.argv[2];
const noop = () => {};
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, (error, response, body) => {
  if (error) {
    return console.log("Sorry! Something happened with the request!");
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    return console.log('Sorry, breed not found!');
  }
  console.log(breed.description);
  console.log(typeof data);
});