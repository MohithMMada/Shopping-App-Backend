//command to load csv file to mongoDB Atlas//

// mongoimport --uri "mongodb+srv://mohith:mongo2atlas@beespoke.7agiyql.mongodb.net/" --collection catalogs --type csv --file "C:\Users\dell\Downloads\product_catalog.csv" --headerline


const express = require('express');
const router = express.Router();
const Catalog = require('../models/catalog');

router.get('/searchItems', (req, res) => {
  const { searchKeyword, priceMin, priceMax } = req.query;

  let query = {
    $or: [                                                      //$or performas ORoperations//
      { product_description: { $regex: searchKeyword, $options: 'i' } },    //$option: 'i' is used inregex to match both lower and upper casepattern in strings//
      { brand_name: { $regex: searchKeyword, $options: 'i' } },
    ],
  };

  if (priceMin && priceMax) {
    query.price = { $gte: parseFloat(priceMin), $lte: parseFloat(priceMax) };     //$gte is greater than or equal to $lte is less than or equal to//
  }

  Catalog.find(query)
    .sort({ Rank: -1 })
    .limit(10)
    .then(results => {
      res.json({ results });
    })
    .catch(error => {
      console.error('Error searching product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
