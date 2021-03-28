import Cell from './Cell';
class Board {
	private cells: Cell[];

	private isPlayerTurn = true;
	constructor(size: number = 3) {
		this.cells = new Array(size * size);
		this.initBoard(size);
	}

	handleSymbol = () => (this.isPlayerTurn ? 'X' : 'O');

	cellClickHandler(e: MouseEvent, cell: Cell): void {
		if (e.target instanceof HTMLDivElement) {
			e.target.innerHTML = this.handleSymbol();
			cell.setCellValue(this.handleSymbol());
			this.isPlayerTurn = !this.isPlayerTurn;
			console.log(cell);
		}
	}

	initBoard(size: number = 3) {
		const boardEl = this.createElement('div', ['board']);
		for (let i = 0; i < this.cells.length; i++) {
			this.cells[i] = new Cell(this.createElement('div', ['cell'], `c${i}`));
		}
		this.cells.forEach((cell) => {
			cell.htmlElement.addEventListener('click', (e) => this.cellClickHandler(e, cell));
			boardEl.appendChild(cell.htmlElement);
		});
		const root = document.getElementById('root') as HTMLDivElement;
		root.appendChild(boardEl);
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
