const express = require('express')
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 5550;
const path = require('path');

process.env.NODE_ENV = 'production';

app.use(express.static('./'));

app.get(['/*'], (req, res) => {
  //   res.sendFile(__dirname + '/index_prod.html');
});

http.listen(PORT, () => {
  console.log('listening on PORT ' + PORT);
  console.log('listening on ' + process.env.NODE_ENV + ' environment.');
});