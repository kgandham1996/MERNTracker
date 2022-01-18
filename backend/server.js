require('./models/db');

const express = require('express');



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));








app.get('/', (req, res) => {
    res.send('Hello World');
 });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
