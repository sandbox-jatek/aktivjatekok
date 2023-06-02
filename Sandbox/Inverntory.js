class Inventory {
  #allapot;
  #szuloElem;
  #i;
  #divElem;
  #imgElem;
  #kepek = [];
  constructor(allapot, szuloElem, i, kepek) {
    this.#kepek = kepek;
    this.#allapot = allapot;
    this.#szuloElem = szuloElem;
    this.#i = i;
    const IMG = $(`<img src="" alt="kep1">`);
    const DIV = $(`<div id=inv>`);
    DIV.append(IMG);
    szuloElem.append(DIV);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.#setAllapot();
    this.#divElem.on("click", () => {
      this.#esemenyTrigger();
    });
  }

  #setAllapot() {
    if (this.#allapot == 0) {
      this.#imgElem.attr("src", this.#kepek[9]);
    } else if (this.#allapot == 1) {
      this.#imgElem.attr("src", this.#kepek[10]);
    } else if (this.#allapot == 2) {
      this.#imgElem.attr("src", this.#kepek[11]);
    } else if (this.#allapot == 3) {
      this.#imgElem.attr("src", this.#kepek[12]);
    } else if (this.#allapot == 4) {
      this.#imgElem.attr("src", this.#kepek[13]);
    } else if (this.#allapot == 5) {
      this.#imgElem.attr("src", this.#kepek[14]);
    }
  }

  getAllapot() {
    return this.#allapot;
  }
  beallit(VALAMI) {
    console.log(VALAMI);
  }
  #esemenyTrigger() {
    let esemeny = new CustomEvent("adat", { detail: this });
    window.dispatchEvent(esemeny);
  }
}

export default Inventory;
