const model = require('../model/sign-interface')

module.exports = (req, res) => {
    console.log(req.body.code)
    model.readBy({confirmation: req.body.code}, function(err, doc){
        if(err) console.log('err')
        model.datastore.database.remove({confirmation: req.body.code}, {}, (err, x) => {if (err) console.log(err)})
        model.data.email = doc[0].email
        model.data.phone = doc[0].phone
        model.data.confirmation = -1
        model.data.islogin = 0
        model.save()
    })
    // model.update({confirmation: req.body.code}, {confirmation: -1, islogin: "1"})
    res.send("you logged in")
}