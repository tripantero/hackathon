module.exports = (req, res) => {
    res.render("signIn", {confirm: req.query.confirm})
}