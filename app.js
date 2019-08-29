const express = require('express');
const commentsRouter = require('./routers/comments');
const app = express();

// クライアントから送られてきた、データをオブジェクトで扱えるように変換している。
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/comments', commentsRouter);

module.exports = app; 