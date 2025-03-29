const express = require("express");
const Website = require("../models/Website");
const router = express.Router();

// Create a new website
router.post("/create", async (req, res) => {
  try {
    const newWebsite = new Website(req.body);
    await newWebsite.save();
    // Return just the ID instead of a full URL
    res.status(201).json({
      message: "Website created!",
      websiteURL: `/website/${newWebsite._id}`,
    });
  } catch (error) {
    console.error("Error creating website:", error);
    res
      .status(500)
      .json({ error: "Error creating website", details: error.message });
  }
});

// Get all websites
router.get("/", async (req, res) => {
  try {
    const websites = await Website.find().select(
      "companyName industryType createdAt"
    );
    res.json(websites);
  } catch (error) {
    res.status(500).json({ error: "Error fetching websites" });
  }
});

// Get a specific website by ID
router.get("/:id", async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) return res.status(404).json({ error: "Website not found" });
    res.json(website);
  } catch (error) {
    res.status(500).json({ error: "Invalid ID or Server Error" });
  }
});

// Update a website
router.put("/:id", async (req, res) => {
  try {
    const website = await Website.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!website) return res.status(404).json({ error: "Website not found" });
    res.json(website);
  } catch (error) {
    res.status(500).json({ error: "Error updating website" });
  }
});

// Delete a website
router.delete("/:id", async (req, res) => {
  try {
    const website = await Website.findByIdAndDelete(req.params.id);
    if (!website) return res.status(404).json({ error: "Website not found" });
    res.json({ message: "Website deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting website" });
  }
});

module.exports = router;
