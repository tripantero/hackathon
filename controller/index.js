const index = (req, res)=>{
    res.render("index")
}

const destination = (req, res) => {
    res.render("destination")
}

const post_search = (req, res) => {
    res.redirect("/search/"+req.body.search)
}

const search = require("./search")


module.exports = {
    "/": ["get", index],
    "/destination": ["get", destination],
    "/search/:city" : ["get", search],
    "/search/" : ["post", post_search],
}