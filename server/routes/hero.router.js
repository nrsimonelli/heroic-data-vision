const express = require('express');
const router = express.Router();
const axios = require('axios');

const MY_URL = process.env.URL;
const MY_KEY = process.env.TOKEN;

router.get('/', (req, res) => {
  const SEARCH_VAL = req.query.string;
  const FULL_PATH = `${MY_URL}${MY_KEY}/search/${SEARCH_VAL}`;

  axios
    .get(`${FULL_PATH}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/egg1', (req, res, next) => {
  const HERO_ID = req.query.heroId;
  const FULL_PATH = `${MY_URL}${MY_KEY}/${HERO_ID}`;

  axios
    .get(`${FULL_PATH}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/egg2', (req, res, next) => {
  const HERO_ID = req.query.heroId;
  const FULL_PATH = `${MY_URL}${MY_KEY}/${HERO_ID}`;

  axios
    .get(`${FULL_PATH}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
