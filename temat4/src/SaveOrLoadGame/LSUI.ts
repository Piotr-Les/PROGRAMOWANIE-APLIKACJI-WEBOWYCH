import { Creator as C } from '../Creator';
import { Disabled } from '../decorators/Disabled';
import { Board } from '../ticTacToe/Board';
import Cell from '../ticTacToe/Cell';
import { GameState, LocalSt as LS } from './LocalStorage';
class LSUI {
	Savelist = C.createElement('ul', ['saveList']) as HTMLUListElement;
	gameSaves: GameState[];
	currentSave!: GameState;
	board: Board;
	cells: Cell[][];
	constructor(board: Board) {
		this.board = board;
		this.cells = board.getCells();
		this.gameSaves = LS.getItemsFromStorage('TicTacToe');
	}

	setCells(cells: Cell[][]) {
		this.cells = cells;
	}

	handleLoadGame(save: GameState) {
		this.currentSave = save;
		this.board.loadBoardState(this.currentSave);
		let number = this.gameSaves.indexOf(save);
		LS.deleteItemFromStorage('TicTacToe', save.id);
		this.gameSaves.splice(number, 1);
		this.displaySaves(this.Savelist);
	}

	displaySaves(list: HTMLUListElement) {
		list.innerHTML = '';
		this.gameSaves.forEach(save => {
			const gameSave = C.createElement('li', ['gameSave'], `${save.id}`);
			if (save.cells.length != this.board.cells.length) {
				gameSave.classList.add('disabled');
			} else {
				if (gameSave.classList.contains('disabled')) {
					gameSave.classList.remove('disabled');
				}
			}
			gameSave.textContent = `Load: saved on: ${save.id}, ${
				save.playerTurn ? 'X' : 'O'
			} Turn, Board Size : ${save.cells.length}`;

			gameSave.addEventListener('click', (e: MouseEvent) => {
				let target = e.target as HTMLDivElement;
				let currentSave = this.gameSaves.find(save => save.id === target.id);

				this.handleLoadGame(currentSave!);
			});
			list.appendChild(gameSave);
		});
	}
	getLSElement(): HTMLElement {
		const LSContainer = C.createElement('div', ['localStCont']);

		const saveGame = C.createElement('div', ['lsSave']);
		saveGame.textContent = 'SAVE GAME';
		saveGame.addEventListener('click', () => {
			let date = new Date();
			let seconds = date.getSeconds();
			let minutes = date.getMinutes();
			let hour = date.getHours();

			let id = `${hour}:${minutes}:${seconds}`;
			LS.storeItem('TicTacToe', {
				id: id,
				playerTurn: this.board.isPlayerTurn,
				cells: this.cells,
			} as GameState);
			this.gameSaves = LS.getItemsFromStorage('TicTacToe');
			this.displaySaves(this.Savelist);
		});

		const loadGame = C.createElement('div', ['lsLoad']);

		this.displaySaves(this.Savelist);

		loadGame.appendChild(this.Savelist);

		LSContainer.appendChild(saveGame);
		LSContainer.appendChild(loadGame);
		return LSContainer;
	}
}
export { LSUI };
