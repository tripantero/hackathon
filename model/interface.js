class interfaces{
    constructor(ds){
        this.datastore = ds;
        this.data = {}
    }

    save(record) {
        this.datastore.save(record)
        console.log("data Saved to: "+this.datastore.name)
    }

    readBy(query = {}, callback){
        this.datastore.find(query, callback)
    }

    update(data, callback){
        this.datastore.update({id: this.data.id}, data, {}, callback)
    }
}

module.exports = interfaces