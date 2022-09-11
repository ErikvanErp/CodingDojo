const Joke = require("../models/jokes.model");
const User = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getJokeById = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(joke => res.json({ joke: joke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  User.create(req.body)
    .then(newJoke => res.json({ user: newJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJokeById = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJokeById = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
