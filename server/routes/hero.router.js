const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(200);

  // https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json
});

module.exports = router;
