const interfaces = require('./interface')
const datastore = require('./datastore')[0]

class result extends interfaces{
    constructor(ds){
        super(ds);
        this.data = {
            tempat_wisata: "",
            kota: "",
            images: ""
        }
    }
}

module.exports = new result(datastore)
