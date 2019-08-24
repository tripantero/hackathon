const interfaces = require('./interface')
const datastore = require('./datastore')[3]

class makeplan extends interfaces{
    constructor(ds){
        super(ds);
        this.data = {
            destination_id: "",
            images: "",
            hotel_id: "",
            transportation_id: "",
            tick_id: "",
            sched_id: ""
        }
    }
}

module.exports = new makeplan(datastore)
