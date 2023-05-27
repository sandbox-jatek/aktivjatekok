import Jatek from "./Jatek.js";

class Jatekter {
  #jatek = [
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "B"],
    ["B", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "B"],
    ["B", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "B"],
    ["B", "0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "B"],
    ["B", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "1", "1", "1", "1", "1", "B"],
    ["B", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "1", "1", "1", "B"],
    ["B", "1", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "1", "1", "1", "1", "1", "B"],
    ["B", "1", "1", "1", "1", "1", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "B"],
    ["B", "1", "1", "2", "2", "1", "1", "1", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "2", "1", "1", "B"],
    ["B", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
  ];
  #JatekterDb = 0;
  #foldszint = this.#jatek.length - 1;
  #tarhely = [];
  #spawnHely = 0;
  #kapcsolo = false;
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
    let spawn = false;
    while (spawn == false) {
      let db = 0;
      for (let i = 0; i < this.#jatek[this.#foldszint].length; i++) {
        if (this.#jatek[this.#foldszint - this.#spawnHely][i] != 0) {
          db++;
        }
      }
      if ((db == this.#jatek[this.#foldszint].length)) {
        this.#spawnHely++;
      }
      else {
        spawn = true;
      }
    }
    spawn = false;
    while (spawn == false) {
      let szam = Math.floor(Math.random() * this.#jatek[this.#foldszint].length);
      if (this.#jatek[this.#foldszint - this.#spawnHely][szam] == 0) {
        this.#jatek[this.#foldszint - this.#spawnHely][szam] = "K";
        spawn = true;
      } else {
        szam = Math.floor(Math.random() * this.#jatek[this.#foldszint].length);
      }
    }
  }

  balra() {
    this.#kapcsolo = true;
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        if (this.#tarhely[i - 1].getAllapot() == 0) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - 1].setMozgas();
          this.autole(i);
        }
        else if (this.#tarhely[i - 1].getAllapot() == 1 && this.#tarhely[i - this.#jatek[this.#foldszint].length - 1].getAllapot() == 0) {
          this.#tarhely[i].setMozgas()
          this.#tarhely[i - this.#jatek[this.#foldszint].length - 1].setMozgas()
          this.#tarhely = $().empty();
        }
        else {
          this.#tarhely = $().empty();
        }
      }
    }
  }

  jobbra() {
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        if (this.#tarhely[i + 1].getAllapot() == 0) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i + 1].setMozgas();
          this.autolee(i);
        }
        else if (this.#tarhely[i + 1].getAllapot() == 1 && this.#tarhely[i - this.#jatek[this.#foldszint].length + 1].getAllapot() == 0) {
          this.#tarhely[i].setMozgas()
          this.#tarhely[i - this.#jatek[this.#foldszint].length + 1].setMozgas()
          this.#tarhely = $().empty();
        }
        else {
          this.#tarhely = $().empty();
        }
      }
    }
  }
  fel() {
    this.#kapcsolo = false;
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        if (this.#tarhely[i].getY() != 0 && this.#tarhely[i - this.#jatek[this.#foldszint].length].getAllapot() == 0) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - this.#jatek[this.#foldszint].length].setMozgas();
          setTimeout(() => {
            this.le();
          }, 300);
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
        this.#tarhely[i - 1].setMozgas();
        this.#tarhely[szam].setMozgas();
        this.#tarhely = $().empty();
    } else {
      this.#tarhely = $().empty();
    }
  }

  autolee(i) {
    let szam = i + this.#jatek[this.#foldszint].length + 1;
    if (this.#tarhely[szam].getAllapot() == 0) {
        this.#tarhely[i + 1].setMozgas();
        this.#tarhely[szam].setMozgas();
        this.#tarhely = $().empty();
    }
    else {
      this.#tarhely = $().empty();
    }

  }

}

export default Jatekter;
