const express = require('express');
const router = express.Router();

const uploadController = require('../controllers/upload');

router
  .post('/uploadFile', uploadController.uploadFile);

module.exports = router;
