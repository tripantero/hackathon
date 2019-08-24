const index = (req, res)=>{
    res.render("index", {sess: req.session.phone})
}

const destination = (req, res) => {
    res.render("destination", {sess: req.session.phone})
}

const post_search = (req, res) => {
    res.redirect("/search/"+req.body.search)
}

const test = (req, res) => {
    res.render(req.params.name)
}

const search = require("./search")
const detail = require("./destination-detail")
const sign   = require('./signin')
const signin = require('./sign')
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
    "/test/:name" : ["get", test]
}