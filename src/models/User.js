const {Schema,model}  = require('mongoose');


const userSchema = new Schema(
    {
        username: String,
        password: String,
        fullName: String,
        email: String,
        userType : Number

    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("User", userSchema);

