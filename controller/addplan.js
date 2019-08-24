const model = require('../model/myplan-interface')
const api = require('../api')
module.exports = (req, res) => {
    model.data.phone = req.session.phone
    model.data.dest_id = req.params.id
    model.data.title = req.body['plan-name']
    model.data.date_start = req.body['start-date']
    model.data.date_end = req.body['end-date']
    var x = false
    console.log(req.body)
    if(req.body.check2) {
        console.log('rrr')
        model.data.hotel = "1"
        x = true;
    }
    
    if(req.body.check1) {
        model.data.ticket = "1"
        x = true;
    }

    if(x){
        var biaya = 0
        if(model.data.ticket != '0'){
            biaya += 150000
        }

        if(model.data.hotel != '0'){
            biaya += 150000
        }

        if(biaya > 200000){
            api(req.session.phone, "Kamu membeli hotel dan ticket sekaligus. silahkan membayar Rp."+biaya)
        }else if(biaya > 100000){
            api(req.session.phone, "Kamu membeli salah satu dari hotel/ticket. silahkan membayar Rp."+biaya)
        }else{
            api(req.session.phone, "Terima kasih karena sudah merencanakan liburan anda dengan aplikasi kami")
        }
    }
    model.save()
    res.redirect('/myplan')
}