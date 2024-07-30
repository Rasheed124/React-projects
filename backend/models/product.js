const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
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
    brand: {
        type: String,
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
    notifyEmail: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
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
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
