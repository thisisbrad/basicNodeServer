const express = require('express');

const app = express();
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Sever is listening on port ${
      server.address().port
    } and using Node version ${process.version}`
  );
});
