const index = (req, res)=>{
    res.render("index")
}

const destination = (req, res) => {
    res.render("destination")
}

const search = (req, res) => {
    console.log(req.body)
}

module.exports = {
    "/": ["get", index],
    "/destination": ["get", destination]
}