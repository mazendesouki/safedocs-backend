const File = require('../models/File');
const bcrypt = require('bcrypt');
const path = require('path');

// تحميل الملف مع التحقق من كلمة المرور والصلاحية
exports.downloadFile = async (req, res) => {
  const fileId = req.params.id;
  const { password } = req.body; // المستخدم يدخلها لو الملف محمي

  try {
    const file = await File.findById(fileId);
    if (!file) return res.status(404).json({ message: 'الملف غير موجود' });

    // تحقق من الصلاحية
    if (file.access.expiresAt && file.access.expiresAt < Date.now()) {
      return res.status(403).json({ message: 'انتهت صلاحية هذا الرابط' });
    }

    // تحقق من كلمة المرور لو محمية
    if (file.access.passwordProtected) {
      const isMatch = await bcrypt.compare(password, file.access.password);
      if (!isMatch) return res.status(401).json({ message: 'كلمة المرور غير صحيحة' });
    }

    // تحميل الملف
    const filePath = path.join(__dirname, '..', 'uploads', file.filename);
    res.download(filePath, file.originalName);
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء تحميل الملف' });
  }
};
