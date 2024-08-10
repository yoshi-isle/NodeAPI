const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const app = express();

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

// Middleware
app.use(morgan('dev'));
app.use(parser.urlencoded({
    extended: false
}));
app.use(parser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;