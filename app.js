const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// require('dotenv').config();
require('dotenv').config({ path: '.env' })
const cors = require('cors');

const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const keranjangRouter = require('./routes/keranjang');
const transaksiRouter = require('./routes/transaksi');
const karyawanRouter = require('./routes/karyawan');
const loginRouter = require('./routes/index');
const tokenRouter = require('./routes/token');
const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/keranjang', keranjangRouter);
app.use('/transaksi', transaksiRouter);
app.use('/karyawan', karyawanRouter);
app.use('/login', loginRouter);
app.use('/refresh', tokenRouter);

module.exports = app;
// app.listen(process.env.PORT);