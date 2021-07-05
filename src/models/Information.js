const {Schema,model}  = require('mongoose');

const informationSchema = new Schema(
    {
        name : {type:String, required:true},
        description : {type:String, required:true},
        phone_number : {type:String, required:true},
        whatsapp : {type:String, required:true},
        facebook : {type:String, required:true},
        instagram : {type:String, required:true},
        address : {type:String, required:true},
       
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("Information", informationSchema);

