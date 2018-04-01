const fetch = require('node-fetch');
const express = require('express');

const app = express();

app.get('/', (request, result) => {
  fetch(process.env.WEBAPP2URL)
    .then(response => response.text())
    .then((responseAsJson) => {
      result.send(responseAsJson);
    });
});


app.listen(3310, () => 'web app 1 is started');
