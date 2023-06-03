class Block {
  #allapot;
  #y;
  #x;
  #divElem;
  #imgElem;
  #kepek = [];
  constructor(allapot, szuloElem, y, x, kepek) {
    this.#kepek = kepek;
    this.#y = y;
    this.#x = x;
    this.#allapot = allapot;
    const IMG = $(`<img src="" alt="kep1">`);
    const DIV = $(`<div id=${this.#y}${this.#x}>`);
    DIV.append(IMG);
    szuloElem.append(DIV);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.#setBlockok(this.#allapot);
    this.#mozgas(65, 37, "balra");
    this.#mozgas(68, 39, "jobbra");
    this.#mozgas(87, 38, "fel");
    this.#kattintas(this.#divElem, "blockLerakas");
    this.#kattintas($(window), "blockok");
  }

  #setBlockok(allapot) {
    if (allapot == 0) {
      this.#imgElem.attr("src", this.#kepek[1]);
    } else if (allapot == 1) {
      this.#imgElem.attr("src", this.#kepek[0]);
    } else if (allapot == "K") {
      this.#imgElem.attr("src", this.#kepek[5]);
    } else if (allapot == "B") {
      this.#imgElem.attr("src", this.#kepek[4]);
    } else if (allapot == 2) {
      this.#imgElem.attr("src", this.#kepek[3]);
    } else if (allapot == 3) {
      this.#imgElem.attr("src", this.#kepek[2]);
    } else if (allapot == 4) {
      this.#imgElem.attr("src", this.#kepek[6]);
    } else if (allapot == 5) {
      this.#imgElem.attr("src", this.#kepek[7]);
    } else if (allapot == 6) {
      this.#imgElem.attr("src", this.#kepek[8]);
    }
  }

  getY() {
    return this.#y;
  }

  getAllapot() {
    return this.#allapot;
  }

  setMozgas() {
    if (this.#allapot == 0) {
      this.#allapot = "K";
      this.#setBlockok(this.#allapot);
    } else {
      this.#allapot = "0";
      this.#setBlockok(this.#allapot);
    }
  }

  #mozgas(gomb, gomb2, mozgas) {
    $(window).on("keydown", () => {
      if (event.which === gomb || event.which === gomb2) {
        let esemeny = new CustomEvent(mozgas, { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
  }
  #kattintas(esemeny, kattintas) {
    esemeny.on("click", () => {
      this.#kattintasTrigger(kattintas);
    });
  }

  #kattintasTrigger(kattintas) {
    let esemeny = new CustomEvent(kattintas, { detail: this });
    window.dispatchEvent(esemeny);
  }

  setBlock(block, csere) {
    if (block.getAllapot() == 0) {
      if (csere == 0) {
        block.#allapot = 1;
        block.#imgElem.attr("src", this.#kepek[0]);
      } else if (csere == 1) {
        block.#allapot = 3;
        block.#imgElem.attr("src", this.#kepek[2]);
      } else if (csere == 2) {
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[3]);
      } else if (csere == 3) {
        block.#allapot = 6;
        block.#imgElem.attr("src", this.#kepek[8]);
      } else if (csere == 4) {
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[7]);
      } else if (csere == 5) {
        block.#allapot = 4;
        block.#imgElem.attr("src", this.#kepek[6]);
      } else if (csere == 6) {
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[17]);
      } else if (csere == 7) {
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[18]);
      } else {
        block.#allapot = 1;
        block.#imgElem.attr("src", this.#kepek[0]);
      }
    } else if (block.getAllapot() == "B") {
      console.log("ne üsd meg!");
    } else {
      block.#allapot = 0;
      block.#imgElem.attr("src", this.#kepek[1]);
    }
  }
}

export default Block;
