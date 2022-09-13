const PersonController = require("../controllers/person.controller");

module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/person', PersonController.createPerson);
};