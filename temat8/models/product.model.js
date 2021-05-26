module.exports = class Product {
	static counter = 0;
	constructor(name, description, price) {
		this.id = Product.counter++;
		this.name = name;
		this.description = description;
		this.price = price;
	}
};
