"use strict";
// podstawowa wersja
// const input = document.getElementById('input') as HTMLDivElement;
// let imie = 'Piotr';
// const h1 = document.createElement('h1');
// h1.textContent = `hello ${imie}`;
// input.appendChild(h1);
// obiektowo
class Person {
    constructor(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    show() {
        const input = document.getElementById('input');
        const h1 = document.createElement('h1');
        h1.textContent = ` Witaj ${this.imie} ${this.nazwisko} mam ${this.wiek} lat`;
        input.appendChild(h1);
    }
}
const p = new Person('Piotr', 'les', 21);
p.show();
