import { IGame } from '../IGame';
import { Creator as C } from '../Creator';
import { Board } from './Board';

class TicTacToe implements IGame {
	name: string;
	size = 3;
	static gameRoot = C.createElement('div', ['TicTacToe']);
	board = new Board(TicTacToe.gameRoot, this.size);
	constructor() {
		this.name = 'Kółko i krzyżyk';
	}
	setSize(e: Event) {
		const target = e.target as HTMLInputElement;
		this.size = +target.value;
		console.log(this.size);
	}

	getGameElement(): HTMLElement {
		TicTacToe.gameRoot.innerHTML = '';
		const input = C.createElement('input') as HTMLInputElement;
		input.type = 'number';
		input.min = '3';
		input.value = '' + this.size;

		input.addEventListener('keyup', (e: Event) => {
			this.setSize(e);
			this.board = new Board(TicTacToe.gameRoot, this.size);
		});
		input.addEventListener('change', (e: Event) => {
			this.setSize(e);
			this.board = new Board(TicTacToe.gameRoot, this.size);
		});

		TicTacToe.gameRoot.appendChild(input);
		this.board = new Board(TicTacToe.gameRoot, this.size);
		return TicTacToe.gameRoot;
	}
}
export { TicTacToe };
