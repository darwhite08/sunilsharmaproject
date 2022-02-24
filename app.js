const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express()
const port = 3000 || process.env.PORT;

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('main');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))