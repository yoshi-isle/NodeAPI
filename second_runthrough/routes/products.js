const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /products"
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST request to /products"
    })
})

router.post('/:productId', (req, res, next) => {
    const id = req.params.productId;

    res.status(200).json({
        message: "Handling POST request to /products for " + id
    })
})

module.exports = router;