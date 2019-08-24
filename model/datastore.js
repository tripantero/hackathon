const nedb = require('nedb')
const path = require('../dbpath').path

class datastore{
    constructor(name, path){
        this.name = name
        this.database = new nedb({filename: path})
        this.database.loadDatabase()
    }

    save(data){
        this.database.insert(data, function(err, docs){
            if(err){
                console.log('error')   
                return;
            }
            console.log("data Saved to: "+this.datastore.name)
        })
    }
    
    find(q, c){
        this.database.find(q, c)
    }

    updateBy(q, u, c){
        this.database.update(q, u, {}, c)
    }
}

const ds = []
path.forEach(element => {
    let ds_  = new datastore(element, "database/"+element)
    ds.push(ds_)
});
module.exports = ds