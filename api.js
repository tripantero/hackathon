const querystring = require('querystring')
const request     = require('request')

module.exports = function(phone, content){
    let data = {
        msisdn: phone,
        content: content
    }
    
    let form_data = querystring.stringify(data)
    
    request({
        headers: {
            "x-api-key": "Tn1ouwAmLSQzilNUfMT447WTLCrgttIF",
            "accept": "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        uri: "https://api.thebigbox.id/sms-notification/1.0.0/messages",
        body: form_data,
        method: "POST"
    }, function(err, res, body){
        if(err) {
            console.log('error')
            return;
        }
    
        console.log(body)
    })
}