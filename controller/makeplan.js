

module.exports = (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.end()
}