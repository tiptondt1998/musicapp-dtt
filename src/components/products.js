const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  numOfDownloads: {
    type: Number
  },
  price: {
    type: Number,
    required: true,
    min: 100
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    _id
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;