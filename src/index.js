const express = require('express');
const app = express();

app.set('port', 5000);

const port = app.get('port');

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

module.exports = app;
