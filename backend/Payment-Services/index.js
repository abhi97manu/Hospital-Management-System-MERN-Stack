const express = require ('express')
const connectToDB = require("./DB/db.js")
const pay_router = require("./Routes/payment.routes.js")
const cors = require('cors')
const port = process.env.PAY_PORT || 3000


connectToDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/payment', pay_router)

app.listen(port, ()=>{
    console.log("listening to Port",port )
})