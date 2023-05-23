import Jatek from "./Jatek.js";

class Jatekter {
  #jatek = [
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
  ];
  #JatekterDb = 0;
  #foldszint = this.#jatek.length - 1;
  #tarhely = [];
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
    for (let i = 0; i < this.#jatek[this.#foldszint].length; i++) {
      if (i == szam) {
        this.#jatek[this.#foldszint][i] = "K";
      }
    }
  }
  balra(adat) {
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].getAllapot() == "K") {
        if(adat[i].getX() != 0){
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - 1].setMozgas();
          this.#tarhely = $().empty();
        }
        else{
          this.#tarhely = $().empty();
        }
      }
    }
  }
  jobbra(adat) {
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].getAllapot() == "K") {
        if(adat[i].getX() != this.#jatek[this.#foldszint].length-1){
          this.#tarhely[i].setMozgas();
          this.#tarhely[i + 1].setMozgas();
          this.#tarhely = $().empty();
        }
        else{
          this.#tarhely = $().empty();
        }
      }
    }
  }
  fel(adat){
    console.log()
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].getAllapot() == "K") {
        if(adat[i].getY() != 0){
          this.#tarhely[i].setMozgas();
          this.#tarhely[i-this.#jatek[this.#foldszint].length].setMozgas();
          this.#tarhely = $().empty();
        }
        else{
          this.#tarhely = $().empty();
        }
      }
    }
  }
}

export default Jatekter;
