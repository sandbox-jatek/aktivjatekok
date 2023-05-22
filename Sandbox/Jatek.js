class Jatek {
  #allapot;
  #index;
  #divElem;
  constructor(allapot, szuloElem, i) {
    this.#index = i;
    this.#allapot = allapot;
    const DIV = $(`<div id=${this.#index}>`)
    DIV.text(allapot);
    szuloElem.append(DIV);
    this.#divElem = szuloElem.children("div:last-child");
    this.#setAllapot();
    $(window).on("keydown", () => {
      if (event.which === 65) {
        let esemeny = new CustomEvent("kattintas", { detail: this});
        window.dispatchEvent(esemeny);
      }
    });
  }

  #setAllapot() {
    if (this.#allapot == 0) {
      this.#divElem.css("background-color", "yellow");
    } else if (this.#allapot == "K") {
      this.#divElem.css("background-color", "white");
    }
  }

  getIndex(){
    return this.#index
  }


  getAllapot(){
    return this.#allapot;
  }

  setMozgas(){
    if(this.#allapot == 0){
      this.#allapot = "K";
      this.#setAllapot(this.#allapot);
    }
    else{
      this.#allapot = "0";
      this.#setAllapot(this.#allapot);
    }
  }
}

export default Jatek;
