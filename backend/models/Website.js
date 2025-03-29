const mongoose = require("mongoose");

const WebsiteSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  industryType: {
    type: String,
    required: true,
    enum: ["pharmacy", "cosmetics", "grocery", "restaurant", "clothing"],
  },
  colorTheme: {
    type: String,
    default: "blue",
    enum: ["blue", "green", "red"],
  },
  aboutContent: {
    type: String,
    default: "",
  },
  contactInfo: {
    address: String,
    phone: String,
    email: String,
  },
  products: [
    {
      name: String,
      sku: String,
      price: String,
      description: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Website", WebsiteSchema);
