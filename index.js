const express = require('express');
const commentsRouter = require('./routers/comments');
const app = express();
const PORT = 8080;

app.use('/api/comments', commentsRouter);

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}`);
}); 