const multer = require('multer');
const path = require('path');

// إعداد تخزين الملفات
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// فلترة أنواع الملفات (اختياري)
const fileFilter = (req, file, cb) => {
  cb(null, true); // تقبل كل الأنواع مؤقتًا
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
