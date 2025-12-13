// routes/adminRoutes.js
const express = require('express');
const DownloadRequest = require('../models/DownloadRequest'); // Import the model
const router = express.Router();

// Fetch all download requests
router.get('/requests', async (req, res) => {
  try {
    const requests = await DownloadRequest.find();
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update request status (Approve/Reject)
router.put('/requests/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const request = await DownloadRequest.findByIdAndUpdate(
      req.params.id,
      { status, responseTimestamp: new Date() },
      { new: true }
    );
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
