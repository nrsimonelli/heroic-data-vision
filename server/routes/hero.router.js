const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  const MY_URL = process.env.API_URL;
  const MY_KEY = process.env.API_KEY;
  const FULL_PATH = `${MY_URL}${MY_KEY}/${45}`;

  console.log('reqBODY', req.body);
  console.log('full path', FULL_PATH);

  axios
    .get(`${FULL_PATH}`)
    .then((response) => {
      console.log('in getallhero', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
