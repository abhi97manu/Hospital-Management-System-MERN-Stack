const RazorPay = require ('razorpay')
const PaymentModel = requrie("./Model/Payment.js")
require('dotenv/config')

const rzrpay = new RazorPay ({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret : process.env.RAZORPAY_SECRET_KEY,
})
const calcPayment = async(userId, amount) =>{
            try{
                const order = await rzrpay.orders.create(amount)
                res.status(201).json({order})

                const newPayment = PaymentModel.create({
                    userId,
                    amount,
                    userId
                })
            }
}