const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
  },
  image: {
    type: String,
    required: [true, "can't be blank"],
  },
  category: {
    type: String,
    required: [true, "can't be blank"],
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  installationServiceAvailable: {
    type: Boolean,
    default: false,
  },
  installationPrice: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: {
      description: {
        type: [String], // Full description as an array of strings
        required: false,
      },
      lightning: {
        type: [String], // Lightning points as an array of strings
        required: false,
      },
      keyFeatures: {
        type: [String], // Key features as an array
        required: false,
      },
      whatsInTheBox: {
        type: [String], // What's in the box as an array
        required: false,
      },
      specifications: {
        type: [String], // Specifications as an array
        required: false,
      },
    },
    default: {},
  },
  deliveryInfo: {
    type: String,
    required: false,
  },
  stockStatus: {
    type: String,
    required: false,
  },
  ratings: [
    {
      star: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating must be at most 5'],
      },
      postedBy: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    },
  ],
  totalRating: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
