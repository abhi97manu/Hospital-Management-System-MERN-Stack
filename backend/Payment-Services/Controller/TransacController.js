const transacController = (req, res) =>{
        const { amount , userId} = req.body
        
        console.log(amount,userId)
}


module.exports = {transacController}