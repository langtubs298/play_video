var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic('test', { 'index': ['default.html', 'default.htm'] }))
app.listen(5000)