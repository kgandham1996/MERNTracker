const mongoose = require('mongoose');


//change localhost to actual docker image name
mongoose.connect('mongodb://localhost:27017/exerciseDB', { useNewUrlParser: true, useUnifiedTopology: false })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => {
    console.log("Couldn't connect to database:" + err);
});

//require models down here
require('./User');