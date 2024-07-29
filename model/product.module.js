const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  images: [String],
  director: {
    type: String,
    required: true
  },
  release_year: {
    type: Number,
    required: true
  },
  genres: [{
    type: String,
    required: true
  }],
  img: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
},

  {
    versionKey: false // You should be aware of the outcome after set to false
  }
);
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});
const Product = mongoose.model('products', productSchema);

module.exports = Product;