import { GAMES } from './Games';
import { TicTacToe } from './ticTacToe/TicTacToe';
import { Saper } from './Saper';

class GameFactory {
	static getGame(name: GAMES) {
		switch (name) {
			case GAMES.TicTacToe:
				return new TicTacToe();
			case GAMES.Saper:
				return new Saper();
		}
	}
}
export { GameFactory };
