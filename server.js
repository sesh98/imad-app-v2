var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
    
});

var count=0;
app.get('/count',function(req, res){
    count=count+1;
    app.send(count.toString());
});

app.get('/sesh', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'sesh.html'));
});

app.get('/sesha', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'sesha.html'));
});
app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
console.log(`IMAD course app listening on port ${port}!`);
});