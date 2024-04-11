

const express = require('express');
const router = express.Router();
const { getFileLinksFromDatabase } = require('../controllers/filesController');

router.get('/files', getFileLinksFromDatabase);

module.exports = router;
