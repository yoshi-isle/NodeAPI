const app = require('express')();
const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`it's running on http://localhost:${PORT}`)
);

app.get('/products', (request, result) =>
{
    result.status(200).send(
        {
            item: "coffee mug",
            price: 0.23
        }
    )
});