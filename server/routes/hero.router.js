const express = require('express');
const router = express.Router();
const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://akabab.github.io/superhero-api/api',
  // headers: { json: true },
});

router.get('/', async (req, res, next) => {
  try {
    const response = await axiosInstance.get('/all.json');
    res.send(response);
  } catch (err) {
    console.log('error in hero.router:', err);
  }
  // https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json
});

module.exports = router;
