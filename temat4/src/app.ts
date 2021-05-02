import './styles/style.scss';
import { Creator as C } from './Creator';
import { GAMES } from './Games';
import { GameFactory as Factory } from './GameFactory';
import { Switcher } from './switcher/Switcher';

class App {
	private static root = document.getElementById('root') as HTMLDivElement;

	constructor() {
		this.init();
	}

	init() {
		const menuCont = C.createElement('div', ['menuCont']) as HTMLDivElement;
		const gameContainer = C.createElement('div', ['gameCont']) as HTMLDivElement;
		const list = C.createElement('ul', ['gameList']) as HTMLUListElement;

		const games = Object.values(GAMES);
		games.forEach(gameObject => {
			const game = Factory.getGame(gameObject);
			if (game.disabled !== true) {
				const gameLi = C.createElement(
					'li',
					['gameListElement'],
					undefined,
					`${game.name}`
				);
				gameLi.addEventListener('click', () => {
					gameContainer.innerHTML = '';
					gameContainer.appendChild(game.getGameElement());
				});
				list.appendChild(gameLi);
			}
		});

		menuCont.appendChild(list);
		const switcher = new Switcher().getSwitcherElement();
		menuCont.appendChild(switcher);

		App.root.appendChild(menuCont);
		App.root.appendChild(gameContainer);
	}
}
new App();
