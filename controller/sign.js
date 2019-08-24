const model = require('../model/sign-interface')

module.exports = (req, res) => {
    model.readBy({phone: req.body.phone}, function(err, doc){
        if(doc.length > 0){
            model.datastore.database.remove({phone: req.body.phone}, {}, (err, doc)=>{console.log(err)})
            model.data.email = doc[0].email
            model.data.phone = doc[0].phone
            model.data.islogin = 1
            model.data.confirmation = -1
            model.save()
            console.log('asdsad')
            req.session.phone = model.data.phone
        }else{
            model.data.email = req.body.email
            model.data.phone = req.body.phone
            model.data.confirmation = ""+Math.floor(Math.random() * 100000)
            model.data.islogin = "0"
            model.save()
            console.log(model.data.confirmation)
            //send otp here
            res.redirect('/sign?confirm=1')
        }
    })
}