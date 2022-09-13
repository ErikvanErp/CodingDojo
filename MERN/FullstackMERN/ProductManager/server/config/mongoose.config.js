const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB productdb connected successfully"))
    .catch(err => console.log("Failed to connect to MongoDB productdb: ", err));