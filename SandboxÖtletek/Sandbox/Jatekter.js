import Jatek from "./Jatek.js";

class Jatekter {
  #jatek = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  ];
  #JatekterDb = 0;
  #foldszint = this.#jatek.length - 1;
  #tarhely = [];

  #szamlalo = 0;
  constructor() {
    this.#spawn();
    this.#init();
    $(window).on("balra", (event) => {
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        this.balra(this.#tarhely);
      }
    });

    $(window).on("jobbra", (event) => {
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        this.jobbra(this.#tarhely);
      }
    });

    $(window).on("fel", (event) => {
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        this.fel(this.#tarhely);
        this.le(this.#tarhely);
      }
    });
  }
  #init() {
    const szuloElem = $("article");
    for (let i = 0; i < this.#jatek.length; i++) {
      this.#JatekterDb += this.#jatek[i].length;
      for (let j = 0; j < this.#jatek[i].length; j++) {
        const jatek = new Jatek(this.#jatek[i][j], szuloElem, i, j);
      }
    }
  }

  #spawn() {
    let szam = Math.floor(Math.random() * this.#jatek[this.#foldszint].length);
    let spawn = false;
    let spawnHely = 0;
    while (spawn == false) {
      if (this.#jatek[this.#foldszint - spawnHely][szam] == 0) {
        this.#jatek[this.#foldszint - spawnHely][szam] = "K";
        spawn = true;
      } else {
        spawnHely++;
        szam = Math.floor(Math.random() * this.#jatek[this.#foldszint].length);
      }
    }
  }
  balra(adat) {
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].getAllapot() == "K") {
        if (adat[i].getX() != 0 && this.#tarhely[i - 1].getAllapot() == 0) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - 1].setMozgas();
          this.#tarhely = $().empty();
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }
  jobbra(adat) {
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].getAllapot() == "K") {
        if (
          adat[i].getX() != this.#jatek[this.#foldszint].length - 1 &&
          this.#tarhely[i + 1].getAllapot() == 0
        ) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i + 1].setMozgas();
          this.#tarhely = $().empty();
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }
  fel(adat) {
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].getAllapot() == "K") {
        if (
          adat[i].getY() != 0 &&
          this.#szamlalo == 0 &&
          this.#tarhely[i - this.#jatek[this.#foldszint].length].getAllapot() ==
            0
        ) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - this.#jatek[this.#foldszint].length].setMozgas();
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }

  le(adat) {
    let lentVan = false;
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].getAllapot() == "K") {
        let szam = i + this.#jatek[this.#foldszint].length;
        if (this.#tarhely[szam].getAllapot() == 0) {
          setTimeout(() => {
            this.#tarhely[i].setMozgas();
            this.#tarhely[i + this.#jatek[this.#foldszint].length].setMozgas();
            this.#tarhely = $().empty();
          }, 300);
        }
      }
    }
  }
}

export default Jatekter;
