// models/DownloadRequest.js
const mongoose = require('mongoose');

const downloadRequestSchema = new mongoose.Schema({
  requestID: { type: String, required: true, unique: true },
  userDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  fileRequested: { type: String, required: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Approved', 'Rejected'] },
  requestTimestamp: { type: Date, default: Date.now },
  responseTimestamp: { type: Date },
});

const DownloadRequest = mongoose.model('DownloadRequest', downloadRequestSchema);

module.exports = DownloadRequest;
