const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const date = new Date();
    const formatDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    response.send(formatDate);
})

app.listen(3000);
module.exports = app;