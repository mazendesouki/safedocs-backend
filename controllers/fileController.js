exports.uploadFile = async (req, res) => {
  res.json({ message: 'رفع الملف شغال تمام!' });
};

exports.getUserFiles = async (req, res) => {
  res.json({ message: 'جلب ملفات المستخدم شغال تمام!' });
};

exports.downloadFile = async (req, res) => {
  res.json({ message: 'تحميل الملف شغال تمام!' });
};
