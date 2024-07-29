const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'users', // Uncomment and adjust this to the correct reference if needed
    required: true
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: 'products', // Uncomment and adjust this to the correct reference if needed
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save middleware to update the `updatedAt` field
orderSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Order = mongoose.model('order_1', orderSchema);

module.exports = Order;