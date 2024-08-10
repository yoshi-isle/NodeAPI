const express = require('express');
const morgan = require('morgan');
const app = express();

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;