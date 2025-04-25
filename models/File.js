const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String },
  size: { type: Number },
  type: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: { type: String }, // مثل: مستند، صورة، مشروع، كورس...
  access: {
    passwordProtected: { type: Boolean, default: false },
    password: { type: String, default: null },
    expiresAt: { type: Date }
  }
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
