const model = require('../model/plan-interface')
const result = require('../model/result-interface')
module.exports = (req, res)=>{
    let q = req.params.id
    model.readBy({destination_id: q}, function(err, doc1){

        result.readBy({_id: q}, function(err, doc){
            res.render('makePlan', {data: doc1[0], res: doc[0]})
        })

    })
}