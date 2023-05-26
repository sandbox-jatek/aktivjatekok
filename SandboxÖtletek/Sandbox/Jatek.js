class Jatek {
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

    this.balra();
    this.jobbra();
    this.fel();
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



  balra() {
    $(window).on("keydown", () => {
      if (event.which === 65 || event.which === 37) {
        let esemeny = new CustomEvent("balra", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
  }

  jobbra() {
    $(window).on("keydown", () => {
      if (event.which === 68 || event.which === 39) {
        let esemeny = new CustomEvent("jobbra", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
  }

  fel(){
    $(window).on("keydown", () => {
      if (event.which === 87 || event.which === 38) {
        let esemeny = new CustomEvent("fel", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
  }

}

export default Jatek;
