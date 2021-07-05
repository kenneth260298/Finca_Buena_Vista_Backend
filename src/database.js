const mongoose = require('mongoose');
const mongoPath = "USE YOUR MONGO PATH"


mongoose
    .connect(mongoPath,
        {
            useUnifiedTopology : true,
            useNewUrlParser:true,
            useFindAndModify:false
        }
    )
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));



    


    