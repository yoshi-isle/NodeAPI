const express = require('express');
const app = express();

const PORT = 8000;

app.use( express.json() );

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
})

app.post('/product/:id', (request, result) =>
{
    const { id } = request.params;
    const { item } = request.body;

    if (!item)
    {
        result.status(404).send({ message: "No item given "});
    }

    result.send({
        item: `test ${item} and ${id}`
    });
})