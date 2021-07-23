const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", (req, res) => {
  const search = req.query.q;
  console.log(`router get`, req.query.q);

  // axios.get('api/search?q={searchInput}', (req, res) => {

  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=3&q=${search}`
    )
    .then((response) => {
      console.log(`server GEt`, response.data.data);
      // res.sendStatus(200);
      res.send(response.data.data); //should we target here?
    })
    .catch((err) => {
      console.log(err);
      // res.sendStatus(500);
    });
});

module.exports = router;
