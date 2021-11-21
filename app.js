const https = require('https');
const fs = require('fs');
var express = require('express')
var serveStatic = require('serve-static')

var app = express()
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

app.use(serveStatic('save_video', { 'index': ['default.html', 'default.htm'] }))
https.createServer(options, app)
    .listen(7000, function (req, res) {
        console.log("Server started at port 7000");
    });