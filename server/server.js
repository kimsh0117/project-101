var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
// express 실행
var app = express();
// view 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
// 정적 디렉토리 설정
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

app.use('/', router);

module.exports = app;