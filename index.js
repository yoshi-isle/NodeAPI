const app = require('express')();
const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`it's running on http://localhost:${PORT}`)
);