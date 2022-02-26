const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('main');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))