const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM favorites ORDER BY id;`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Database GET fail', error);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  const newGif = req.body.url;
  console.log('GIF ADDED', newGif);
  const queryText = 'INSERT INTO favorites (url) VALUES ($1);';
  pool.query(queryText, [newGif])
  .then(response => {
    res.sendStatus(201);
  }).catch(error => {
    console.log('error POSTing to db', error);
    res.sendStatus(500);
  })
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const newCategory = req.body.newCategory;
  const favId = req.params.favId;
  console.log('newCategory is:', req.body.newCategory);
  console.log('favId is:', favId);
  const queryCategory = 
  `UPDATE favorites
  SET "category" = $1
  WHERE id = $2;`;
  
    pool.query(queryCategory, [newCategory, favId])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });

});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
