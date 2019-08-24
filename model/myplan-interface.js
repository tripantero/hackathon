const interfaces = require('./interface')
const datastore = require('./datastore')[4]

class myplan extends interfaces{
    constructor(ds){
        super(ds);
        this.data = {
            phone: "",
            title:"",
            date_start: "",
            date_end: "",
            hotel: "0",
            ticket: "0"
        }
    }
}

module.exports = new myplan(datastore)
