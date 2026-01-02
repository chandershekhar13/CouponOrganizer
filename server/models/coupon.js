const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  storeName: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String }, 
  category: { 
    type: String, 
    required: true,
    enum: ['Food', 'Fashion', 'Tech', 'Travel', 'Health', 'Other'] 
  },
  expiryDate: { type: Date, required: true },
  storeUrl: { type: String },
  isUsed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Coupon', CouponSchema);