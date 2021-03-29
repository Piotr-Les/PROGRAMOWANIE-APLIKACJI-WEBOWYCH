import Cell from './Cell';
import EndGameType from './EndGameType';
class Board {
	private cells: Cell[];
	private isPlayerTurn = true;
	private static root = document.getElementById('root') as HTMLDivElement;
	constructor(size: number = 3) {
		this.cells = new Array(size * size);
		this.initBoard();
	}

	static winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	handleSymbol = () => (this.isPlayerTurn ? 'X' : 'O');

	handleTurnInfo = () => {
		const mess = document.querySelector('.message') as HTMLDivElement;
		if (mess) {
			mess.textContent = `Ruch gracza ${this.isPlayerTurn ? 'X' : 'O'}`;
		}
	};

	cellClickHandler(e: MouseEvent, cell: Cell): void {
		if (e.target instanceof HTMLDivElement) {
			e.target.innerHTML = this.handleSymbol();
			cell.setCellValue(this.handleSymbol());

			if (this.isWin()) {
				this.handleEndGame(EndGameType.WIN);
			} else if (this.isDraw()) {
				this.handleEndGame(EndGameType.DRAW);
			}
			this.isPlayerTurn = !this.isPlayerTurn;
			this.handleTurnInfo();
		}
	}
	handleEndGame(type: EndGameType) {
		let endMessage;
		if (type === EndGameType.DRAW) {
			endMessage = 'DRAW!';
		} else {
			endMessage = `${this.handleSymbol()} WINS!`;
		}

		const resetButton = this.createElement('button', ['restart']);
		resetButton.textContent = 'RESET';
		resetButton.addEventListener('click', () => location.reload());

		const endContianer = this.createElement('div', ['end']);
		endContianer.textContent = endMessage;
		endContianer.appendChild(resetButton);
		Board.root.appendChild(endContianer);
	}

	initBoard() {
		const boardEl = this.createElement('div', ['board']);
		for (let i = 0; i < this.cells.length; i++) {
			this.cells[i] = new Cell(this.createElement('div', ['cell'], `c${i}`));
		}
		this.cells.forEach((cell) => {
			cell.htmlElement.addEventListener('click', (e) => this.cellClickHandler(e, cell), {
				once: true,
			});
			boardEl.appendChild(cell.htmlElement);
		});

		const turnMeter = this.createElement('div', ['message']);

		Board.root.appendChild(turnMeter);
		Board.root.appendChild(boardEl);
		this.handleTurnInfo();
	}

	isWin() {
		let symbol = this.handleSymbol();
		return Board.winningCombinations.some((comb) => {
			return comb.every((index) => {
				return this.cells[index].cellValue === symbol;
			});
		});
	}
	isDraw() {
		return this.cells.every((cell) => {
			return cell.cellValue.length !== 0;
		});
	}
	createElement(type: string, classes?: string[], id?: string) {
		const element = document.createElement(type);
		if (classes) {
			element.classList.add(...classes);
		}
		if (id) {
			element.id = id;
		}
		return element;
	}
}
export default Board;
