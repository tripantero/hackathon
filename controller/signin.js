const model = require('../model/sign-interface')
const api = require('../api')
module.exports = (req, res) => {
    model.readBy({phone: req.body.phone}, function(err, doc){
        if(doc.length > 0){
            model.datastore.database.remove({phone: req.body.phone}, {}, (err, doc)=>{console.log(err)})
            model.data.email = doc[0].email
            model.data.phone = doc[0].phone
            model.data.islogin = 1
            model.data.confirmation = -1
            model.save()
            req.session.phone = model.data.phone
            console.log("rrr")
            res.redirect('/')
        }else{
            model.data.email = req.body.email
            model.data.phone = req.body.phone
            model.data.confirmation = Math.floor(Math.random() * 100000)
            model.data.islogin = "0"
            model.save()
            console.log(req.body.phone)
            api(req.body.phone, model.data.confirmation)
            res.redirect('/sign?confirm=1')
        }
    })
}
