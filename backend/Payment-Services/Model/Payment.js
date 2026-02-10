const mongoose = require('mongoose')




const PaymentSchema = new mongoose.Schema({
    userId: {type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    price : {
        amount  : {type : Number, require : true},
        currency : {type : String, default : "INR"}
    },
    status :{
        type : String ,
        default : "pending",
        enum : ["pending", "sucess", "failed"]
    }

})

const PaymentModel =  mongoose.Model("Payment", PaymentSchema)

module.exports = PaymentModel;


