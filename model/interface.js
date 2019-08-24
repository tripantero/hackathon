class interfaces{
    constructor(ds){
        this.datastore = ds;
        this.data = {}
    }

    save(record = undefined) {
        if(record){
            this.datastore.save(record)
        }else{
            this.datastore.save(this.data)
        }
        
    }

    readBy(query = {}, callback){
        this.datastore.find(query, callback)
    }

    update(data, callback){
        this.datastore.update({id: this.data.id}, data, {}, callback)
    }
}

module.exports = interfaces