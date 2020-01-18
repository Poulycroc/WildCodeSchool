const https = require("https");
const baseURL = "https://restcountries.eu/rest/v2/";

const get = (url, finish) => {
  https
    .get(baseURL + url, response => {
      let data = [];

      response.on("data", chunk => data.push(chunk));

      response.on("end", () => {
        data = JSON.parse(Buffer.concat(data).toString());
        finish(data)
      });
    })
    .on("error", err => console.log("Error: " + err.message));
};

module.exports = {
  get
};
