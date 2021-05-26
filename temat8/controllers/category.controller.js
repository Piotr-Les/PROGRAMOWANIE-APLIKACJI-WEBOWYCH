const Category = require('../models/category.model');

const categories = [];

exports.getAll = (req, res) => {
	res.status(200).send(categories);
};

exports.add = (req, res) => {
	console.log(req.body);
	const category = new Category(req.body.name);
	categories.push(category);
	res.status(201).send(category);
};

exports.update = (req, res) => {
	const cToUpdate = categories.find(category => category.id === req.body.id);

	if (cToUpdate) {
		let index = categories.indexOf(cToUpdate);
		if (req.body.name) {
			cToUpdate.name = req.body.name;
		}

		categories[index] = cToUpdate;
		res.status(200).send(cToUpdate);
	}
};

exports.delete = (req, res) => {
	console.log('DELETE category of id :' + req.params.id);
	const category = categories.find(category => category.id == req.params.id);
	if (category) {
		categories.splice(categories.indexOf(category), 1);
	}
};
