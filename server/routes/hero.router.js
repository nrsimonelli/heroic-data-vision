const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  const MY_URL = process.env.API_URL;
  const MY_KEY = process.env.API_KEY;
  const INEEDTHISID = req.query.heroId;
  const FULL_PATH = `${MY_URL}${MY_KEY}/${INEEDTHISID}`;
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
  const MY_URL = process.env.API_URL;
  const MY_KEY = process.env.API_KEY;
  const INEEDTHISID = req.query.heroId;
  const FULL_PATH = `${MY_URL}${MY_KEY}/${INEEDTHISID}`;

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
  const MY_URL = process.env.API_URL;
  const MY_KEY = process.env.API_KEY;
  const INEEDTHISID = req.query.heroId;
  const FULL_PATH = `${MY_URL}${MY_KEY}/${INEEDTHISID}`;

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
