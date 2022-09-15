const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/teammgrdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("Failed to connect to MongoDB: ", err));