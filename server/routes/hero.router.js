const express = require('express');
const router = express.Router();
const axios = require('axios');

// const url = 'https://akabab.github.io/superhero-api/api/all.json';

router.get('/', (req, res, next) => {
  const url = 'https://akabab.github.io/superhero-api/api/all.json';
  axios
    .get(url)
    .then((response) => {
      console.log('in getallhero', response.data[0]);
      res.send(response.data);
      // console.log('getallhero response.data', response.data[1]);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get('/', async (req, res) => {
//   try {
//     const response = await axiosInstance.get('/all.json');
//     res.send(response);
//   } catch (err) {
//     console.log('error in hero.router:', err);
//   }
//   // https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json
// });

module.exports = router;
