class Cell {
	cellValue: string;
	htmlElement: HTMLElement;
	x: number;
	y: number;
	constructor(cell: HTMLElement, y: number, x: number) {
		this.htmlElement = cell;
		this.cellValue = '';
		this.x = x;
		this.y = y;
	}
	setCellValue(value: string) {
		this.cellValue = value;
	}
}
export default Cell;
