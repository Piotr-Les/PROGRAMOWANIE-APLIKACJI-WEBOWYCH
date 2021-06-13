const controller = require('../controllers/category.controller');

module.exports = function (app) {
	app.get('/categories', controller.getAll);
	app.post('/categories', controller.add);
	app.put('/categories', controller.update);
	app.delete('/categories', controller.delete);
};
