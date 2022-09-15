const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/teammgrdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB authordb connected successfully"))
    .catch(err => console.log("Failed to connect to MongoDB authordb: ", err));