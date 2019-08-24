const model = require('../model/sign-interface')

module.exports = (req, res) => {
    console.log(req.session.phone)
    model.readBy({phone: req.session.phone}, function(err, doc){
        model.datastore.database.remove({phone: req.session.phone}, {}, () =>{})
        model.data.email = doc[0].email
        model.data.phone = doc[0].phone
        model.data.confirmation = -1
        model.data.islogin = 0
        model.save()
        req.session.destroy()
        res.redirect('/')
    })
}