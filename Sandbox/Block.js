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
    this.#setAllapot();

    this.mozgas();
  }

  #setAllapot() {
    if (this.#allapot == 0) {
      this.#imgElem.attr("src", this.#kepek[1]);
    } else if (this.#allapot == 1) {
      this.#imgElem.attr("src", this.#kepek[0]);
    } else if (this.#allapot == "K") {
      this.#imgElem.attr("src", this.#kepek[5]);
    } else if (this.#allapot == "B") {
      this.#imgElem.attr("src", this.#kepek[4]);
    } else if (this.#allapot == 2) {
      this.#imgElem.attr("src", this.#kepek[3]);
    } else if (this.#allapot == 3) {
      this.#imgElem.attr("src", this.#kepek[2]);
    } else if (this.#allapot == 4) {
      this.#imgElem.attr("src", this.#kepek[6]);
    }
    else if (this.#allapot == 5) {
      this.#imgElem.attr("src", this.#kepek[7]);
    }
    else if (this.#allapot == 6) {
      this.#imgElem.attr("src", this.#kepek[8]);
    }
  }

  getY() {
    return this.#y;
  }

  getX() {
    return this.#x;
  }

  getAllapot() {
    return this.#allapot;
  }

  setMozgas() {
    if (this.#allapot == 0) {
      this.#allapot = "K";
      this.#setAllapot(this.#allapot);
    } else {
      this.#allapot = "0";
      this.#setAllapot(this.#allapot);
    }
  }

  mozgas() {
    $(window).on("keydown", () => {
      if (event.which === 65 || event.which === 37) {
        let esemeny = new CustomEvent("balra", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
    $(window).on("keydown", () => {
      if (event.which === 68 || event.which === 39) {
        let esemeny = new CustomEvent("jobbra", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
    $(window).on("keydown", () => {
      if (event.which === 87 || event.which === 38) {
        let esemeny = new CustomEvent("fel", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });

    this.#divElem.on("click", () => {
      this.#kattintasTrigger();
    });
    $(window).on("click", () => {
      this.#kattintasTrigger2();
    });
  }

  #kattintasTrigger() {
    let esemeny = new CustomEvent("kattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }

  #kattintasTrigger2() {
    let esemeny = new CustomEvent("kattintas2", { detail: this });
    window.dispatchEvent(esemeny);
  }

  setBlock(kattintottBlock, block) {
    console.log(kattintottBlock.getAllapot())
    console.log(block)
    if (this.#allapot == 0) {
      this.#allapot = 1;
      this.#setAllapot(this.#allapot);
    } else if (this.#allapot == "B") {
      console.log("Ne üsd ki!");
    } else {
      this.#allapot = 0;
      this.#setAllapot(this.#allapot);
    }
  }

  setFu() {
    if (this.#allapot == 1) {
      this.#allapot = 3;
      this.#setAllapot(this.#allapot);
    }
  }
}

export default Block;
