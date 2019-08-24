const interfaces = require('./interface')
const datastore = require('./datastore')[1]

class result extends interfaces{
    constructor(ds){
        super(ds);
        this.data = { tempat_wisata: '',
        kawasan: '',
        result: [ { images: '', kota: '', deskripsi: '' } ],
        deskripsi: '' }
    }
}

module.exports = new result(datastore)