var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic('save_video', { 'index': ['default.html', 'default.htm'] }))
app.listen(5000)