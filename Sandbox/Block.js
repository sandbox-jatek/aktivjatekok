class Block {
  #allapot;
  #y;
  #x;
  #divElem;
  constructor(allapot, szuloElem, y, x) {
    this.#y = y;
    this.#x = x;
    this.#allapot = allapot;
    const DIV = $(`<div id=${this.#y}${this.#x}>`);
    DIV.text(allapot);
    szuloElem.append(DIV);
    this.#divElem = szuloElem.children("div:last-child");
    this.#setAllapot();

    this.mozgas()
  }

  #setAllapot() {
    if (this.#allapot == 0) {
      this.#divElem.css("background-color", "aqua");
      this.#divElem.css("color", "aqua");
    } else if (this.#allapot == 1) {
      this.#divElem.css("background-color", "green");
      this.#divElem.css("color", "green");
    } else if (this.#allapot == "K") {
      this.#divElem.css("background-color", "white");
      this.#divElem.css("color", "white");
    }
    else if (this.#allapot == "B") {
      this.#divElem.css("background-color", "turquoise");
      this.#divElem.css("color", "turquoise");
    }
    else if (this.#allapot == "2") {
      this.#divElem.css("background-color", "grey");
      this.#divElem.css("color", "grey");
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
      this.#kattintasTrigger()
    });
    $(window).on("click", () => {
      this.#kattintasTrigger2()
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

  setBlock() {
    if (this.#allapot == 0) {
      this.#allapot = 1;
      this.#setAllapot(this.#allapot);
    }
    else if(this.#allapot == "B"){
      console.log("Ne üsd ki!")
    }
     else {
      this.#allapot = 0;
      this.#setAllapot(this.#allapot);
    }
  }

}

export default Block;
