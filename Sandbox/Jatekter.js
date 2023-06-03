import Block from "./Block.js";
import Inventory from "./Inverntory.js";

class Jatekter {
  #jatek = [
    [
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
    ],
    [
      "B",
      "0",
      "0",
      "5",
      "5",
      "5",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "B",
    ],
    [
      "B",
      "0",
      "5",
      "5",
      "5",
      "5",
      "5",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "B",
    ],
    [
      "B",
      "0",
      "5",
      "5",
      "5",
      "5",
      "5",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
      "B",
    ],
    [
      "B",
      "0",
      "0",
      "0",
      "6",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "B",
    ],
    [
      "B",
      "0",
      "0",
      "0",
      "6",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
      "1",
      "B",
    ],
    [
      "B",
      "0",
      "0",
      "0",
      "6",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
      "3",
      "1",
      "1",
      "B",
    ],
    [
      "B",
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "0",
      "0",
      "0",
      "0",
      "3",
      "3",
      "0",
      "0",
      "3",
      "1",
      "1",
      "1",
      "1",
      "B",
    ],
    [
      "B",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "3",
      "3",
      "3",
      "3",
      "1",
      "1",
      "3",
      "3",
      "1",
      "1",
      "1",
      "1",
      "1",
      "B",
    ],
    [
      "B",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "B",
    ],
    [
      "B",
      "2",
      "2",
      "1",
      "1",
      "1",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "1",
      "1",
      "2",
      "2",
      "1",
      "1",
      "2",
      "2",
      "2",
      "B",
    ],
    [
      "B",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "B",
    ],
    [
      "B",
      "2",
      "2",
      "2",
      "4",
      "4",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "4",
      "4",
      "4",
      "2",
      "2",
      "2",
      "2",
      "B",
    ],
    [
      "B",
      "2",
      "4",
      "4",
      "4",
      "4",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "4",
      "4",
      "4",
      "4",
      "4",
      "4",
      "2",
      "2",
      "B",
    ],
    [
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
    ],
  ];

  #inventory = ["0", "1", "2", "3", "4", "5", "6", "7"];
  #JatekterDb = 0;
  #foldszint = this.#jatek.length - 1;
  #tarhely = [];
  #spawnHely = 0;
  #kivalasztottBlock;
  #kivalasztottBlockTarhely = [];
  #kivalasztottBlockHely = [];
  #kepekLista = [];
  #inventoryBlock;
  constructor(kepekLista) {
    this.#kepekLista = kepekLista;
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

    $(window).on("kattintas", (event) => {
      this.#tarhely.push(event.detail);
      this.#kivalasztottBlock = event.detail;
    });

    $(window).on("kattintas2", (event) => {
      this.#kivalasztottBlockTarhely.push(event.detail);
      if (this.#kivalasztottBlockTarhely.length == this.#JatekterDb) {
        this.ellenorzes();
      }
    });

    $(window).on("adat", (event) => {
      this.#inventoryBlock = event.detail.getAllapot();
    });

  }

  #init() {
    const szuloElem = $("article");
    for (let i = 0; i < this.#jatek.length; i++) {
      this.#JatekterDb += this.#jatek[i].length;
      for (let j = 0; j < this.#jatek[i].length; j++) {
        this.block = new Block(
          this.#jatek[i][j],
          szuloElem,
          i,
          j,
          this.#kepekLista
        );
      }
    }
    const asideElem = $("aside");
    for (let i = 0; i < this.#inventory.length; i++) {
      this.inventory = new Inventory(
        this.#inventory[i],
        asideElem,
        i,
        this.#kepekLista
      );
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
      if (db == this.#jatek[this.#foldszint].length) {
        this.#spawnHely++;
      } else {
        spawn = true;
      }
    }
    spawn = false;
    while (spawn == false) {
      let szam = Math.floor(
        Math.random() * this.#jatek[this.#foldszint].length
      );
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
        if (this.#tarhely[i - 1].getAllapot() == 0) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i - 1].setMozgas();
          this.autole(i);
        } else if (
          this.#tarhely[i - 1].getAllapot() != 0 &&
          this.#tarhely[
            i - this.#jatek[this.#foldszint].length - 1
          ].getAllapot() == 0 &&
          this.#tarhely[i - this.#jatek[this.#foldszint].length].getAllapot() ==
            0
        ) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[
            i - this.#jatek[this.#foldszint].length - 1
          ].setMozgas();
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
        if (this.#tarhely[i + 1].getAllapot() == 0) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[i + 1].setMozgas();
          this.autolee(i);
        } else if (
          this.#tarhely[i + 1].getAllapot() != 0 &&
          this.#tarhely[
            i - this.#jatek[this.#foldszint].length + 1
          ].getAllapot() == 0 &&
          this.#tarhely[i - this.#jatek[this.#foldszint].length].getAllapot() ==
            0
        ) {
          this.#tarhely[i].setMozgas();
          this.#tarhely[
            i - this.#jatek[this.#foldszint].length + 1
          ].setMozgas();
          this.#tarhely = $().empty();
        } else {
          this.#tarhely = $().empty();
        }
      }
    }
  }
  fel() {
    for (let i = 0; i < this.#tarhely.length; i++) {
      if (this.#tarhely[i].getAllapot() == "K") {
        if (
          this.#tarhely[i].getY() != 0 &&
          this.#tarhely[i - this.#jatek[this.#foldszint].length].getAllapot() ==
            0
        ) {
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
    let szorzo = 1
    let szam = i + this.#jatek[this.#foldszint].length - 1;
    while(this.#tarhely[szam].getAllapot() == 0){
      szorzo++;
      szam = i + this.#jatek[this.#foldszint].length * szorzo - 1;

    }
    szorzo = szorzo - 1
    let szam2 = i + this.#jatek[this.#foldszint].length * szorzo - 1;
    if (this.#tarhely[szam2].getAllapot() == 0) {
      this.#tarhely[i - 1].setMozgas();
      this.#tarhely[szam2].setMozgas();
      this.#tarhely = $().empty();
    } else {
      this.#tarhely = $().empty();
    }
  }

  autolee(i) {
    let szorzo = 1
    let szam = i + this.#jatek[this.#foldszint].length + 1;
    while(this.#tarhely[szam].getAllapot() == 0){
      szorzo++;
      szam = i + this.#jatek[this.#foldszint].length * szorzo + 1;

    }
    szorzo = szorzo - 1
    let szam2 = i + this.#jatek[this.#foldszint].length * szorzo + 1;
    if (this.#tarhely[szam2].getAllapot() == 0) {
      this.#tarhely[i + 1].setMozgas();
      this.#tarhely[szam2].setMozgas();
      this.#tarhely = $().empty();
    }
    else {
      this.#tarhely = $().empty();
    }
  }

  ellenorzes() {
    for (let i = 0; i < this.#kivalasztottBlockTarhely.length; i++) {
      if (this.#kivalasztottBlockTarhely[i].getAllapot() == "K") {
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i - 1]);
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i + 1]);
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i - 2]);
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i + 2]);

        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 1 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 1 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 1 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 1 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 2 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 2 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 2 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 2 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + this.#jatek[this.#foldszint].length
          ]
        );
        for (let j = 0; j < this.#kivalasztottBlockHely.length - 1; j++) {
          if (this.#kivalasztottBlock == this.#kivalasztottBlockHely[j]) {
            this.block.setBlock(this.#kivalasztottBlock, this.#inventoryBlock)
            this.#kivalasztottBlock = $().empty();
          }
        }
        this.#kivalasztottBlockHely = $().empty();
      }
    }
    this.#kivalasztottBlockTarhely = $().empty();
  }

}

export default Jatekter;
