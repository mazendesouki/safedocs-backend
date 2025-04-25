const express = require('express');
const router = express.Router();
const { uploadFile, getUserFiles, downloadFile } = require('../controllers/fileController');
const upload = require('../middleware/upload');

// Routes
router.post('/upload', upload.single('file'), uploadFile);
router.get('/', getUserFiles);
router.get('/:id', downloadFile);

module.exports = router; // <-- تأكد ده موجود
