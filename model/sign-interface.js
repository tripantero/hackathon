const interfaces = require('./interface')
const datastore = require('./datastore')[2]

class sign extends interfaces{
    constructor(ds){
        super(ds);
        this.data = {
            email: "",
            phone: "",
            confirmation: "",
            islogin: "",
        }
    }
}

module.exports = new sign(datastore)