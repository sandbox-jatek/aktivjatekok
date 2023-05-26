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
  #boolean = false;
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
      if (this.#tarhely[i].getAllapot() == "K" && this.#boolean == false) {
        console.log("balra");
        if (
          this.#tarhely[i].getX() != 0 &&
          this.#tarhely[i - 1].getAllapot() == 0
        ) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - 1].setMozgas();
          this.autole(i);
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }

  jobbra() {
    console.log("jobbra")
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
    console.log("fel")
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
          this.#boolean = true;
          if(this.#boolean == true){
            console.log("felbal")
            this.#tarhely[i - this.#jatek[this.#foldszint-1].length].balra();
            this.#tarhely[i - this.#jatek[this.#foldszint-1].length-1].balra();
            this.#boolean = false;
          }
          setTimeout(() => {
            this.le();
          }, 500);
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }

  le() {
    console.log("le")
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        let szam = i + this.#jatek[this.#foldszint].length;
        if (this.#tarhely[szam].getAllapot() == 0) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i + this.#jatek[this.#foldszint].length].setMozgas();
          this.#tarhely = $().empty();
        }
      }
    }
  }

  autole(i) {
    let szam = i + this.#jatek[this.#foldszint].length - 1;
    if (this.#tarhely[szam].getAllapot() == 0) {
      console.log("autole")
      setTimeout(() => {
        this.#tarhely[i - 1].setMozgas();
        this.#tarhely[szam].setMozgas();
        this.#tarhely = $().empty();
      }, 500);
    } else {
      this.#tarhely = $().empty();
    }
  }

}

export default Jatekter;
