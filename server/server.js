//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8088;
const app = express();

const buildFolder = path.join(__dirname, '..', 'client', 'build');

app.use(favicon(path.join(buildFolder, 'favicon.ico')));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(buildFolder));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/api/v1/info', function(req, res) {
    var info = {status : 'Up'}
    return res.json(info)
})
app.get('/*', function (req, res) {
  res.sendFile(path.join(buildFolder, 'index.html'));
});app.listen(port);