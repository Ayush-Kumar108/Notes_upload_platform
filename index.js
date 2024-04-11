const express = require('express');
const mongoose = require('mongoose');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const documentsRouter = require('./server/routes/documents');

mongoose.connect('mongodb://127.0.0.1:27017/document-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.use('/api/documents', documentsRouter);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
