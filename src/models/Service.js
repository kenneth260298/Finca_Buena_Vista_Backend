const {Schema,model}  = require('mongoose');

const serviceSchema = new Schema(
    {
        description : String,
        images : [String],
        features : [String]
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("Service", serviceSchema);

