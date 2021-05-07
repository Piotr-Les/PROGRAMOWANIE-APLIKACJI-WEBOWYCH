import { Creator as C } from '../Creator';
import { Board } from '../ticTacToe/Board';
import Cell from '../ticTacToe/Cell';
import { GameState, SessionSt as ST } from './SessionStorage';

class Undo {
	cells: Cell[][];
	board: Board;
	currentState!: GameState;
	constructor(board: Board, cells: Cell[][]) {
		this.cells = cells;
		this.board = board;
	}

	clear = (name: string) => {
		if (ST.getItemsFromStorage(name)) {
			ST.clearItemsFromStorage(name);
		}
	};
	saveState = (name: string, cells: Cell[][]) => {
		let date = new Date();
		let seconds = date.getSeconds();
		let minutes = date.getMinutes();
		let hour = date.getHours();

		let id = `${hour}:${minutes}:${seconds}`;
		ST.storeItem(name, {
			id: id,
			playerTurn: this.board.isPlayerTurn,
			cells: cells,
		} as GameState);
	};

	getUndoElement(): HTMLElement {
		const undo = C.createElement('div', ['undo']);
		undo.textContent = 'Undo move';
		undo.addEventListener('click', () => this.handleUndo());
		return undo;
	}
	handleUndo = () => {
		let history = ST.getItemsFromStorage('Undo') as GameState[];
		if (!history) {
			return;
		} else {
			if (history.length < 1 || history.length == 1) {
				return;
			}
			this.currentState = history[history.length - 2];
			history.pop();
			ST.clearItemsFromStorage('Undo');
			history.forEach(item => {
				ST.storeItem('Undo', item);
			});
			this.board.undo(this.currentState);
		}
	};
}
export { Undo };
