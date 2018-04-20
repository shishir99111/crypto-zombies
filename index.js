const express = require('express')
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 5560;
const path = require('path');
const { abi, provider, contractAddress } = require('./env');

app.use(express.static('./public'));

app.get(['/*'], (req, res) => {
  res.render(__dirname + '/index.ejs', { abi, provider, contractAddress });
});

http.listen(PORT, () => console.log('listening on PORT ' + PORT));