const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get ('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=10`)
        .then(response => {
            console.log(response.data);
            // res.sendStatus(200);
            res.send(response.data);
        })
        .catch(err => {
            console.log(err);
            // res.sendStatus(500);
        });
    })

module.exports = router;