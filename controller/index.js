const index = (req, res)=>{
    res.render("index")
}

const destination = (req, res) => {
    res.render("destination")
}

const post_search = (req, res) => {
    res.redirect("/search/"+req.body.search)
}

const test = (req, res) => {
    res.render(req.params.name)
}

const search = require("./search")
const detail = require("./destination-detail")


module.exports = {
    "/": ["get", index],
    "/destination": ["get", destination],
    "/destination/:id": ["get", detail],
    "/search/:city" : ["get", search],
    "/search/" : ["post", post_search],
    "/test/:name" : ["get", test]
}