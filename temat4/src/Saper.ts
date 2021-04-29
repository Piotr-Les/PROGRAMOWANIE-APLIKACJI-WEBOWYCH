import { IGame } from './IGame';

class Saper implements IGame {
	name: string;

	constructor() {
		this.name = 'Saper';
	}
	getGameElement(): HTMLElement {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode('Hello Saper'));
		return div;
	}
}
export { Saper };
