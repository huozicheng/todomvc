var express        =  require('express'),
    path = require('path'),
    app = express();

app.get('/', function(req, res, next) {
    res.sendFile(path.resolve('./index.html'));
});

app.get('*', function(req,res,next) {
    res.sendFile(path.resolve(path.join(__dirname, req.url)));
});

var server = app.listen(8000, function() {
    console.log('ready');
});