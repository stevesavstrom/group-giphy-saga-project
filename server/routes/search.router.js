const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", (req, res) => {
  const search = req.query.q;
  console.log(req.query.q);

  // axios.get('/search?q={searchInput}', (req, res) => {

  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=10&q=PLACEHOLDER`
    )
    .then((response) => {
      console.log(response.data);
      // res.sendStatus(200);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      // res.sendStatus(500);
    });
});

module.exports = router;
