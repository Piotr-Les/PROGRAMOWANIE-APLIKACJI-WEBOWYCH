class Creator {
	static createElement(type: string, classes?: string[], id?: string, text?: string) {
		const element = document.createElement(type);
		if (classes) {
			element.classList.add(...classes);
		}
		if (id) {
			element.id = id;
		}
		if (text) {
			element.textContent = text;
		}
		return element;
	}
}
export { Creator };
