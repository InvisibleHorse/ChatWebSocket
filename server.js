const express = require('express');

const app = express();

app.get('/users', () => {
    console.log('Hello');
});
app.listen(8888);
