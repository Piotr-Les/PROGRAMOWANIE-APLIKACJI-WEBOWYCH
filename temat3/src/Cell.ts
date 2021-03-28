class Cell {
	cellValue: string;
	htmlElement: HTMLElement;
	constructor(cell: HTMLElement) {
		this.htmlElement = cell;
		this.cellValue = '';
	}
	setCellValue(value: string) {
		this.cellValue = value;
	}
}
export default Cell;
