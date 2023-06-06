class Inventory {
  #allapot;
  #i;
  #divElem;
  #imgElem;
  #kepek = [];
  constructor(allapot, szuloElem, i, kepek) {
    this.#kepek = kepek;
    this.#allapot = allapot;
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
    } else if (this.#allapot == 6) {
      this.#imgElem.attr("src", this.#kepek[15]);
    } else if (this.#allapot == 7) {
      this.#imgElem.attr("src", this.#kepek[16]);
    } else if (this.#allapot == 8) {
      this.#imgElem.attr("src", this.#kepek[20]);
    }
  }

  getAllapot() {
    return this.#allapot;
  }

  #esemenyTrigger() {
    let esemeny = new CustomEvent("adat", { detail: this });
    window.dispatchEvent(esemeny);
  }
}

export default Inventory;
