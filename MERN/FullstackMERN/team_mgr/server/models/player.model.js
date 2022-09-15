const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    position: {
        type: String,
        required: false
    },
    games: [Number]
})

module.exports.Player = mongoose.model("Player", PlayerSchema);