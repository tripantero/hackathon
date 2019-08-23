const express = require('express')
const http    = require('http')
const app     = express()
const bParser = require('body-parser')
const session = require('express-session')
const cookie  = require('cookie-parser')
const morgan  = require('morgan')
const port    = process.env.PORT || 6007

app.use('/', require('./router'))
app.use(bParser({extended: false}))
app.set('view engine', "ejs")
app.set(cookie())
app.set(morgan('dev'))
app.set('views', 'views/')
app.use(session({
    secret: "Trip Antero",
    resave: false
}))

http.createServer(app).listen(port, ()=> {console.log("app running on "+port)})