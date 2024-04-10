const express = require('express');
const PORT = 8081;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/about', (req, res) => {
    res.send('Team baby shark doo doo doo doo doo doo');
})