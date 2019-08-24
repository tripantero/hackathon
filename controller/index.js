const index = (req, res)=>{
    res.render("index", {sess: req.session.phone || undefined})
}

const destination = (req, res) => {
    res.render("destination", {sess: req.session.phone || undefined})
}

const logout = require('./logout')

const post_search = (req, res) => {
    res.redirect("/search/"+req.body.search)
}

const test = (req, res) => {
    res.render(req.params.name, {sess: req.session.phone || undefined})
}

const search = require("./search")
const detail = require("./destination-detail")
const sign   = require('./sign')
const signin = require('./signin')
const confirm = require('./confirm')


module.exports = {
    "/": ["get", index],
    "/destination": ["get", destination],
    "/destination/:id": ["get", detail],
    "/search/:city" : ["get", search],
    "/search/" : ["post", post_search],
    "/sign"   : ["get", sign],
    "/signin" : ["post", signin],
    "/confirm" : ["post", confirm],
    "/logout" : ["get", logout],
    "/test/:name" : ["get", test]
}