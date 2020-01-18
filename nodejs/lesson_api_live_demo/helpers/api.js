const https = require("https");
const baseURL = 'https://restcountries.eu/rest/v2/'

const get = (url, callback) => {
  const path = baseURL + url
  https
    .get(path, function(response) {
      let data = ''

      response.on("data", function(chunck) {
        data += chunck
      })
      
      response.on("end", function() {
        callback(data)
      })
    })
    .on("error", e => console.error(e));
};

module.exports = {
  get
};
