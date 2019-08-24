const index = (req, res)=>{
    res.render("index")
}

const destination = (req, res) => {
    res.render("destination")
}

const search = (req, res) => {
    let q = req.body.search
    res.render('detailCity')
}

module.exports = {
    "/": ["get", index],
    "/destination": ["get", destination],
    "/search" : ["post", search]
}