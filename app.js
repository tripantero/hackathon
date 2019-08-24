const express = require('express')
const app     = express()
const bParser = require('body-parser')
const session = require('express-session')
const cookie  = require('cookie-parser')
const morgan  = require('morgan')
const port    = process.env.PORT || 6007

app.use(express.static("views/assets"))
app.use(bParser.urlencoded({extended: false}))
app.use(bParser.json())
app.set('view engine', "ejs")
app.set('views', 'views/')
app.use(cookie())
app.use(morgan('dev'))
app.use(session({
    secret: "Trip Antero",
    resave: false
}))
app.use('/', require('./router'))
app.listen(port, ()=> {console.log("app running on "+port)})