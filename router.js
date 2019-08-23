const controller = require('./controller')
const keys       = Object.keys(controller)
const router = require('express').Router()

keys.forEach(element => {
    let route = controller[element]

    if(route[0] == "get"){
        router.get(element, route[1])
    }else{
        router.post(element, route[1])
    }
})

module.exports = router