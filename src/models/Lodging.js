const {Schema,model}  = require('mongoose');

const lodgingSchema = new Schema(
    {
        name : String,
        internal_name : String,
        description : String,
        address : String,
        minDays : Number,
        maxDays : Number,
        maxCapacity : Number,
        services: [String],
        images : [String],
        conditions: [String],
        bookings : [ {
        }],
        mainImage : String,
        unavailableDates:[],
        isAvailableMidWeek : Boolean,
        daysToPrepare : Number,
        pricePackages : [Object],
        extraNightPrice : Number,
        locationURL : String,
        facebookGalleryURL : String,
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("Lodging", lodgingSchema);

