import { Creator as C } from '../Creator';
import Cell from './Cell';
import EndGameType from './EndGameType';
import { TotalBoardClicks } from '../decorators/TotalBoardClicks';
import { LSUI } from '../SaveOrLoadGame/LSUI';
import { GameState } from '../SaveOrLoadGame/LocalStorage';
class Board {
	public cells: Cell[][];
	public isPlayerTurn: boolean;
	private root: HTMLElement;
	private size: number = 3;
	public LS: LSUI;
	private loading: boolean | undefined;
	constructor(root: HTMLElement, size: number) {
		this.cells = this.initCells(size);
		this.root = root;
		this.size = size;
		this.isPlayerTurn = true;
		this.LS = new LSUI(this);
		this.initBoard(this.root, this.size);
	}

	getCells(): Cell[][] {
		return this.cells;
	}

	handleSymbol = () => (this.isPlayerTurn ? 'X' : 'O');

	handleTurnInfo = () => {
		const mess = document.querySelector('.message') as HTMLDivElement;
		if (mess) {
			mess.textContent = `Ruch gracza ${this.handleSymbol()}`;
		}
	};

	getCell = (target: HTMLTableCellElement) => {
		return this.cells
			.find(cell => cell.find(c => c.htmlElement === target))!
			.find(c => c.htmlElement === target);
	};

	initCells(size: number) {
		let a = [];

		for (let i = 0; i < size; i++) {
			a[i] = Array(size);
			for (let j = 0; j < size; j++) {
				a[i][j] = null;
			}
		}
		return a;
	}

	LoadBoardState(state: GameState) {
		this.isPlayerTurn = state.playerTurn;
		this.initBoard(this.root, this.size);
		for (let i = 0; i < this.size; i++) {
			for (let k = 0; k < this.size; k++) {
				this.cells[i][k].setCellValue(state.cells[i][k].cellValue);
				this.cells[i][k].htmlElement.textContent = state.cells[i][k].cellValue;
			}
		}
	}
	@TotalBoardClicks()
	handleClick(e: Event) {
		let target = e.target as HTMLTableCellElement;
		if (target.textContent == '') {
			let symbol = this.handleSymbol();
			let cell = this.getCell(target);
			cell!.setCellValue(symbol);
			target.textContent = cell!.cellValue;

			if (this.isWin()) {
				this.handleEndGame(EndGameType.WIN);
			} else if (this.isDraw()) {
				this.handleEndGame(EndGameType.DRAW);
			}

			this.isPlayerTurn = !this.isPlayerTurn;
			this.handleTurnInfo();

			this.LS.setCells(this.cells);
		}
	}
	isWin() {
		let symbol = this.handleSymbol();
		const horizontal = () => {
			return this.cells.some(cells => cells.every(cell => cell.cellValue === symbol));
		};

		const vertical = () => {
			let cells = this.initCells(this.cells.length);
			for (let i = 0; i < cells.length; i++) {
				for (let k = 0; k < cells.length; k++) {
					cells[i][k] = this.cells[k][i];
				}
			}
			return cells.some(cells => cells.every(cell => cell.cellValue === symbol));
		};

		const diagonal = () => {
			let cells = new Array<Cell>(this.cells.length);
			for (let i = 0; i < cells.length; i++) {
				for (let k = 0; k < cells.length; k++) {
					cells[i] = this.cells[i][i];
				}
			}
			return cells.every(cell => cell.cellValue === symbol);
		};

		const rDiagonal = () => {
			let cells = this.cells.flat(1);
			cells = cells.filter(cell => cell.x + cell.y === this.cells.length - 1);
			return cells.every(cell => cell.cellValue === symbol);
		};

		return horizontal() || vertical() || diagonal() || rDiagonal();
	}
	isDraw() {
		return this.cells.every(cells => cells.every(cell => cell.cellValue.length !== 0));
	}

	handleEndGame(type: EndGameType) {
		let endMessage;
		if (type === EndGameType.DRAW) {
			endMessage = 'DRAW!';
		} else {
			endMessage = `${this.handleSymbol()} WINS!`;
		}

		const resetButton = C.createElement('button', ['restart']);
		resetButton.textContent = 'RESET';
		resetButton.addEventListener('click', () => {
			this.root.removeChild(endContianer);
			this.root.removeChild(document.querySelector('.message')!);
			this.isPlayerTurn = true;
			this.initBoard(this.root, this.size);
		});

		const endContianer = C.createElement('div', ['end']);
		endContianer.textContent = endMessage;
		endContianer.appendChild(resetButton);
		this.root.appendChild(endContianer);
	}

	private initBoard(root: HTMLElement, size: number) {
		const board = C.createElement('table', ['ticBoard']);
		const mess = C.createElement('div', ['message']);
		mess.textContent = `Ruch gracza ${this.handleSymbol()}`;
		const LSCont = this.LS.getLSElement();
		for (let i = 0; i < size; i++) {
			const row = C.createElement('tr', ['ticRow']);

			for (let k = 0; k < size; k++) {
				const cell = C.createElement('td', ['ticCell'], `${i}:${k}`);
				this.cells[i][k] = new Cell(cell, i, k);
				this.cells[i][k].htmlElement.textContent = this.cells[i][k].cellValue;
				cell.addEventListener('click', e => this.handleClick(e));
				row.appendChild(cell);
			}

			board.appendChild(row);
		}
		if (root.childElementCount > 1) {
			let element = document.querySelector('.ticBoard');
			let mess = document.querySelector('.message');
			let LSCont = document.querySelector('.localStCont');
			if (element) {
				root.removeChild(element);
			}
			if (mess) {
				root.removeChild(mess);
			}
			if (LSCont) {
				root.removeChild(LSCont);
			}
		}

		root.appendChild(mess);
		root.appendChild(board);
		root.appendChild(LSCont);
	}
}
export { Board };
