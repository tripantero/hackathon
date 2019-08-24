const axios = require('axios')
const config = require('./config')
console.log(config)
module.exports = (phone, content) => {
    axios.post("https://api.thebigbox.id/sms-notification/1.0.0/messages", {msisdn: phone, content: content}, config)
    .then(function(res){
        console.log(res.data)
        console.log(res.status)
    })
    .catch(function (error) {
        console.log(error);
      })
}
module.exports("+62895370397214", "asdasd")