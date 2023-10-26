var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var pelangganRouter = require('./routes/pelanggan');
var barangRouter = require('./routes/barang');
var keranjangRouter = require('./routes/keranjang');
var transaksiRouter = require('./routes/transaksi');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pelanggan', pelangganRouter);
app.use('/barang', barangRouter);
app.use('/keranjang', keranjangRouter);
app.use('/transaksi', transaksiRouter);

module.exports = app;
