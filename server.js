var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);



app.get('/', function (req, res)
{
    res.render('index.html');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('app is running on http://localhost:' + port);
});