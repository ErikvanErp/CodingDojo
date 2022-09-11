const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.getAllJokes);
  app.get("/api/jokes/:id", JokeController.getJokeById);
  app.put("/api/jokes/update/:id", JokeController.updateJokeById);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteJokeById);
};