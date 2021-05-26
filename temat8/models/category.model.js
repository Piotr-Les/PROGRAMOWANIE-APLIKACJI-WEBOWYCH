module.exports = class Category {
	static counter = 0;
	constructor(name) {
		this.id = Category.counter++;
		this.name = name;
	}
};
