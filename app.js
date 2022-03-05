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
app.get('/cart', function(req, res) {
    res.render('cart-main.ejs');
});
app.get('/preview', function(req, res) {
    res.render('product-preview-main');
});
app.get('/login', function(req, res) {
    res.render('components/signup/login');
});



app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))