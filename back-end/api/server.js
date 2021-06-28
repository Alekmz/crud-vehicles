const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers/vehiclesController');
const cors = require('cors');


var corsOptions = {
    origin: 'http://localhost:4200',
}
const app = express();
const port = 3000;
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/vehicles', controllers);


app.get('/', (req, res) => res.send('Access: /vehicles'));
app.listen(port, () => console.log(`Port ${port}`));
module.exports = app;