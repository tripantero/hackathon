const controller = require('./controller')
const router = require('express').Router()

router.get('/', controller.index)

module.exports = router