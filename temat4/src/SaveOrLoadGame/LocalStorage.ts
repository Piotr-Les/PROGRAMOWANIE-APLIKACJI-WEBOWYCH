import Cell from '../ticTacToe/Cell';

export interface GameState {
	id: string;
	playerTurn: boolean;
	cells: Cell[][];
}

class LocalSt {
	static storeItem(name: string, item: GameState) {
		let items;
		if (localStorage.getItem(name) === null) {
			items = [];
			items.push(item);
			localStorage.setItem(name, JSON.stringify(items));
		} else {
			items = JSON.parse(localStorage.getItem(name)!);
			items.push(item);
			localStorage.setItem(name, JSON.stringify(items));
		}
	}

	static getItemsFromStorage(name: string) {
		let items;
		if (localStorage.getItem(name) === null) {
			items = [];
		} else {
			items = JSON.parse(localStorage.getItem(name)!);
		}
		return items;
	}

	static deleteItemFromStorage(name: string, id: string) {
		let items = JSON.parse(localStorage.getItem(name)!);
		items.forEach(function (item: GameState, index: number) {
			if (id === item.id) {
				items.splice(index, 1);
			}
		});
		localStorage.setItem(name, JSON.stringify(items));
	}
	static clearItemsFromStorage(name: string) {
		localStorage.removeItem(name);
	}
}
export { LocalSt };
