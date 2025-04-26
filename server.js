require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGO_URI); // 🔥 اختبار

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
console.log('App initialized'); // 🔥 تأكيد إن app اتعرف

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Routes
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  const PORT = process.env.PORT || 5000;  // لو محليًا شغال على 5000
  app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.log(err));
