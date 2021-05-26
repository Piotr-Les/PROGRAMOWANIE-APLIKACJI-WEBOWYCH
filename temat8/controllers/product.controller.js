const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
	res.status(200).send(products);
};

exports.add = (req, res) => {
	console.log(req.body);
	const product = new Product(req.body.name, req.body.description, req.body.price);
	products.push(product);
	res.status(201).send(product);
};

exports.update = (req, res) => {
	const pToUpdate = products.find(product => product.id === req.body.id);

	if (pToUpdate) {
		let index = products.indexOf(pToUpdate);
		if (req.body.name) {
			pToUpdate.name = req.body.name;
		}
		if (req.body.description) {
			pToUpdate.description = req.body.description;
		}
		if (req.body.price) {
			pToUpdate.price = req.body.price;
		}

		products[index] = pToUpdate;
		res.status(200).send(pToUpdate);
	}
};

exports.delete = (req, res) => {
	console.log('DELETE product of id :' + req.params.id);
	const product = products.find(product => product.id == req.params.id);
	if (product) {
		products.splice(products.indexOf(product), 1);
	}
};
