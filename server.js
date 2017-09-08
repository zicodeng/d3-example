const express = require('express')
const app = express()
const port = 3000;
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  return res.sendFile(__dirname + '/world-map.html');
})

app.listen(port, function () {
  console.log('map of the world on port ' + port);
});