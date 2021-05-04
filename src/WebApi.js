require('@babel/core').transform('code', {
  presets: ['@babel/preset-env'],
});
require('@babel/register');
require('babel-polyfill');

const express = require('express');
const { FormParser } = require('./FormParser');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(JSON.stringify({ message: 'Google Form Model Generator' }));
});

app.get('/api/model/', (req, res) => {
  const url = req.query.url;
  if (url) {
    FormParser(url).then((parsed) => {
      res.type('application/json').send(JSON.stringify(parsed));
    });
  } else {
    res.status(404);
  }
});

app.listen(port, () => {
  console.log(
    `Google Form Model Generator listening at http://localhost:${port}`
  );
});
