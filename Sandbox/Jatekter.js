import Jatek from "./Jatek.js";

class Jatekter {
  jatek = ["0", "0", "K", "0", "0"];
  #karakter = [];
  constructor() {
    this.#init();
    $(window).on("kattintas", (event) => {
      this.#karakter.push(event.detail);
      console.log(this.#karakter)
      this.#mozgas();
    });
  }
  #init() {
    const szuloElem = $("article");
    for (let i = 0; i < this.jatek.length; i++) {
      const jatek = new Jatek(this.jatek[i], szuloElem, i);
    }
  }

  #mozgas() {
    for (let i = 0; i < this.#karakter.length; i++) {
      if (this.#karakter[i].getAllapot() == "K") {
        this.#karakter[1].setMozgas();
      }
    }
  }
}

export default Jatekter;
