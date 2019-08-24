const model = require('../model/myplan-interface')
const result = require('../model/result-interface')
module.exports = (req, res) =>{
    model.readBy({phone: req.session.phone}, function(err, doc){
        
        res.render("planDest", {sess: req.session.phone || undefined, data: doc})
    })
    
}