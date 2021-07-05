const {Schema,model}  = require('mongoose');


const bookingSchema = new Schema(
    {
        client : String,
        start : String,
        end : String,
        totalPrice : Number,
        deposit : Number,
        balance: Number
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("Booking", bookingSchema);

