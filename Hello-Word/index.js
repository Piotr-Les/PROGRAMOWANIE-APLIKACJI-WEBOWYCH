"use strict";
// podstawowa wersja
// const input = document.getElementById('input') as HTMLDivElement;
// let imie = 'Piotr';
// const h1 = document.createElement('h1');
// h1.textContent = `hello ${imie}`;
// input.appendChild(h1);
// obiektowo
var Person = /** @class */ (function () {
    function Person(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Person.prototype.show = function () {
        var input = document.getElementById('input');
        var h1 = document.createElement('h1');
        h1.textContent = " Witaj " + this.imie + " " + this.nazwisko + " mam " + this.wiek + " lat";
        input.appendChild(h1);
    };
    return Person;
}());
var p = new Person('Piotr', 'les', 21);
p.show();
