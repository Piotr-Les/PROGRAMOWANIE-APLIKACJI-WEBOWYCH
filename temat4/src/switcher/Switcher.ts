import { Creator as C } from '../Creator';
import { ThemeTypes } from './ThemeTypes';

class Switcher {
	setTheme(type: ThemeTypes) {
		document.body.setAttribute('data-theme', type);
	}
	getSwitcherElement(): HTMLElement {
		const switcherContainer = C.createElement('div', ['switcherCont']);

		const switcherDark = C.createElement('div', ['theme', 'themeDark']);
		switcherDark.addEventListener('click', () => this.setTheme(ThemeTypes.dark));

		const switcherLight = C.createElement('div', ['theme', 'themeLight']);
		switcherLight.addEventListener('click', () => this.setTheme(ThemeTypes.light));

		const switcherOcean = C.createElement('div', ['theme', 'themeOcean']);
		switcherOcean.addEventListener('click', () => this.setTheme(ThemeTypes.ocean));

		switcherContainer.appendChild(switcherDark);
		switcherContainer.appendChild(switcherLight);
		switcherContainer.appendChild(switcherOcean);

		return switcherContainer;
	}
}
export { Switcher };
