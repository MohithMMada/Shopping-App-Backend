const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  product_id: Number,
  Product_category: String,
  Rank: Number,
  brand_name: String,
  product_description: String,
  price: Number,
  image_link: String,
});

const Catalog = mongoose.model('catalog', catalogSchema);
module.exports = Catalog;
