const express = require('express');
const router = express.Router();
const uploadController = require('../config/cloudinary');
const { uploadImage } = require('../controller/uploadImage');

router.post('/upload', uploadController.uploadImage);

module.exports = router;
