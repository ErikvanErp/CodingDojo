const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to mongoDB peopledb"))
    .catch(err => console.log("Connection to mongoDB peopledb failed", err))