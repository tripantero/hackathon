const model = require('../model/result-interface')

module.exports = (req, res)=>{
    let q = req.params.city
    model.readBy({kota: q}, (err, docs)=>{
        if(err) console.log("errrrr");
        res.render('detailCity', {result: docs, sess: req.session.phone || undefined})
    })
}