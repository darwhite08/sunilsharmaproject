const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')

const app = express()
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


app.get('/', function(req, res) {
    res.render('main');
});
app.get('/cart', function(req, res) {
    res.render('cart-main.ejs');
});
app.get('/profile', function(req, res) {
    res.render('components/profile/profile');
});
app.get('/preview', function(req, res) {
    res.render('product-preview-main');
});
app.get('/login', function(req, res) {
    res.render('components/signup/login');
});
app.get('/signup', function(req, res) {
    res.render('components/signup/signup');
});
app.get('/signup/login', function(req, res) {
    res.render('components/signup/login');
});
app.get('/cart/checkout', function(req, res) {
    res.render('components/product-order/delivery-address');
});



app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))