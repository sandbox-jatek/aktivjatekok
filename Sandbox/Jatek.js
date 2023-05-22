class Jatek {
  #allapot;
  #index;
  #divElem;
  constructor(allapot, szuloElem, i) {
    this.#index = i;
    this.#allapot = allapot;
    szuloElem.append(
      `<div id=div id=${this.#index} style="${this.#setAllapot(
        this.#allapot
      )}">.</div>`
    );
    this.#divElem = szuloElem.children("div:last-child");
    this.#setAllapot;
    $(window).on("keydown", () => {
      if (event.which === 65) {
        let esemeny = new CustomEvent("kattintas", { detail: this});
        window.dispatchEvent(esemeny);
      }
    });
  }

  #setAllapot(allapot) {
    if (allapot == 0) {
      return "background-color: aqua;";
    } else if (allapot == "K") {
      return "background:red;";
    }
  }

  getEgyediIndex(){
    return this.#index
  }


  getAllapot(){
    return this.#allapot;
  }

  setMozgas(){
    this.#allapot = "K";
    this.#setAllapot(this.#allapot);
  }
}

export default Jatek;
