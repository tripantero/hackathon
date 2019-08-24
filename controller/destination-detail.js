const model = require('../model/detail-interface')

module.exports = (req, res)=>{
    let q = req.params.id
    model.readBy({_id: q}, function(err, doc){
        res.render("detailDest", {data: doc[0], sess: req.session.phone || undefined})
    })
}