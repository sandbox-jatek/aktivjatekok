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
  #spawnHely = 0;

  #szamlalo = 0;
  constructor() {
    this.#spawn();
    this.#init();
    $(window).on("balra", (event) => {
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        this.balra();
      }
    });

    $(window).on("jobbra", (event) => {
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        this.jobbra();
      }
    });

    $(window).on("fel", (event) => {
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        this.fel();
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
    let db = 0;
    for (let i = 0; i < this.#jatek[this.#foldszint].length; i++) {
      if (this.#jatek[this.#foldszint][i] == 1) {
        db++;
      }
    }
    if ((db = 10)) {
      this.#spawnHely++;
    }
    let szam = Math.floor(Math.random() * this.#jatek[this.#foldszint].length);
    let spawn = false;
    while (spawn == false) {
      if (this.#jatek[this.#foldszint - this.#spawnHely][szam] == 0) {
        this.#jatek[this.#foldszint - this.#spawnHely][szam] = "K";
        spawn = true;
      } else {
        szam = Math.floor(Math.random() * this.#jatek[this.#foldszint].length);
      }
    }
  }

  balra() {
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        if (
          this.#tarhely[i].getX() != 0 &&
          this.#tarhely[i - 1].getAllapot() == 0
        ) {
          let szam = i + this.#jatek[this.#foldszint].length;
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - 1].setMozgas();
          if (this.#tarhely[szam - 1].getAllapot() == 0) {
            setTimeout(() => {
              this.#tarhely[i].setMozgas();
              this.#tarhely[szam - 1].setMozgas();
            }, 200);
          }
          this.#tarhely = $().empty();
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }

  jobbra() {
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        if (
          this.#tarhely[i].getX() != this.#jatek[this.#foldszint].length - 1 &&
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
  fel() {
    let boolean = false;
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        if (
          this.#tarhely[i].getY() != 0 &&
          this.#szamlalo == 0 &&
          this.#tarhely[i - this.#jatek[this.#foldszint].length].getAllapot() ==
            0
        ) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - this.#jatek[this.#foldszint].length].setMozgas();
          $(window).on("keydown", () => {
            if (event.which === 68 || event.which === 39) {
              this.jobbra();
              this.le();
            }
          });
          $(window).on("keydown", () => {
            if (event.which === 65 || event.which === 37) {
              this.balra();
              this.le();
            }
          });
          setTimeout(() => {
            this.le();
          }, 200);
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }

  le() {
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
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
