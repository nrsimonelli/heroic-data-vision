const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  let queryString = `
    SELECT * FROM hero_info ORDER BY id ASC;
  `;
  pool
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/first', (req, res) => {
  let queryString = `
      SELECT * FROM hero_info WHERE id = $1;
    `;
  pool
    .query(queryString, [req.query.heroId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/search', (req, res) => {
  let queryString = `
        SELECT * FROM hero_info WHERE name LIKE '%$1%' ORDER BY id ASC;
      `;
  pool
    .query(queryString, [req.query.string])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

module.exports = router;
