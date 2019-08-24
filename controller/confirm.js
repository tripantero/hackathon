const model = require('../model/sign-interface')

module.exports = (req, res) => {
    console.log(req.body.code)
    model.readBy({confirmation: req.body.code}, function(err, doc){

        if(err) {console.log('err'); return;}
        if(doc == 0) return;
        model.data.email = doc[0].email
        model.data.phone = doc[0].phone
        model.data.confirmation = -1
        model.data.islogin = 0
        model.save()
        model.datastore.database.remove({confirmation: req.body.code}, {}, (err, x) => {if (err) console.log(err)})
    })
    res.redirect("/sign?confirm=0")
}