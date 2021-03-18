// podstawowa wersja
// const input = document.getElementById('input') as HTMLDivElement;

// let imie = 'Piotr';

// const h1 = document.createElement('h1');
// h1.textContent = `hello ${imie}`;

// input.appendChild(h1);

// obiektowo

class Person {
	constructor(private imie: string, private nazwisko: string, private wiek: number) {}

	public show() {
		const input = document.getElementById('input') as HTMLDivElement;
		const h1 = document.createElement('h1');
		h1.textContent = ` Witaj ${this.imie} ${this.nazwisko} mam ${this.wiek} lat`;
		input.appendChild(h1);
	}
}
const p = new Person('Piotr', 'les', 21);
p.show();
