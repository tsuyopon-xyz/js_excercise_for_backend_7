const express = require('express');
const commentRouter = require('./routers/comments');
const app = express();
const PORT = 8080;

app.use('/api/comments', commentRouter);

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}`);
}); 