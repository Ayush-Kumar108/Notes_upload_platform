const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const Document = require('../models/Document');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newDocument = new Document({ url: result.secure_url });
    await newDocument.save();
    res.json(newDocument);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
