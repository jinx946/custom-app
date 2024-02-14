var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
app.all('/', function (req, res, next) {
  console.log('请求进入');
  next();
});
app.get('/', function (req, res, next) {
  res.send('get server,获取到数据');
  next();
});
app.get('/data', function (req, res) {
  console.log('res: ', res);
  res.send('获取数据');
});
app.post('/', function (req, res) {
  res.send('post server,获取到数据');
});
http.listen(6879, function () {
  console.log('server is running in 6879');
});
