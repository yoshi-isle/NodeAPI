const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /products"
    })
})

router.post('/', (req, res, next) => {
    const product = {
        id: req.body.id,
        name: req.body.name,
        quantity: req.body.quantity
    }
    res.status(201).json({
        product: product
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    res.status(200).json({
        message: "Handling POST request to /products for " + id,
    })
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated product"
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted product"
    })
})

module.exports = router;