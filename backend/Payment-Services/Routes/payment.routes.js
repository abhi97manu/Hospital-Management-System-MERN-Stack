const express = require('express')
const {transacController} = require('../Controller/TransacController')
const pay_router = express.Router()


pay_router.post('/make-pay', transacController)


module.exports = pay_router