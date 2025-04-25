const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { uploadFile, getUserFiles, downloadFile } = require('../controllers/fileController');
const upload = require('../middleware/upload');

// رفع ملف
router.post('/upload', protect, upload.single('file'), uploadFile);

// جلب ملفات المستخدم
router.get('/myfiles', protect, getUserFiles);

// تحميل ملف مع التحقق من كلمة المرور/الصلاحية
router.post('/download/:id', downloadFile);

module.exports = router;
