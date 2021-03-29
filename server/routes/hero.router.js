const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  const url = 'https://akabab.github.io/superhero-api/api/all.json';
  axios
    .get(url)
    .then((response) => {
      console.log('in getallhero', response.data[0]);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
