import Cell from '../ticTacToe/Cell';

export interface GameState {
	id: string;
	playerTurn: boolean;
	cells: Cell[][];
}

class SessionSt {
	static storeItem(name: string, item: GameState) {
		let items;
		if (sessionStorage.getItem(name) === null) {
			items = [];
			items.push(item);
			sessionStorage.setItem(name, JSON.stringify(items));
		} else {
			items = JSON.parse(sessionStorage.getItem(name)!);
			items.push(item);
			sessionStorage.setItem(name, JSON.stringify(items));
		}
	}

	static getItemsFromStorage(name: string) {
		let items;
		if (sessionStorage.getItem(name) === null) {
			items = [];
		} else {
			items = JSON.parse(sessionStorage.getItem(name)!);
		}
		return items;
	}

	static deleteItemFromStorage(name: string, id: string) {
		let items = JSON.parse(sessionStorage.getItem(name)!);
		items.forEach(function (item: GameState, index: number) {
			if (id === item.id) {
				items.splice(index, 1);
			}
		});
		sessionStorage.setItem(name, JSON.stringify(items));
	}
	static clearItemsFromStorage(name: string) {
		sessionStorage.removeItem(name);
	}
}
export { SessionSt };
