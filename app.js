const express = require('express')
const http    = require('http')
const app     = express()
const lib     = require('./lib')(http)
const port    = process.env.PORT || 6007

app.use('/', require('./router'))
http.createServer(app).listen(port, ()=> {console.log("app running on "+port)})