import Jatek from "./Jatek.js";

class Jatekter {
  #jatek = ["0", "0", "K", "0", "0"];
  constructor() {
    this.#init();
    $(window).on("kattintas", (event) => {
      if(event.detail.getAllapot() == "K"){
        this.#mozgas(event.detail);
      }
      
    });
  }
  #init() {
    const szuloElem = $("article");
    for (let i = 0; i < this.#jatek.length; i++) {
      const jatek = new Jatek(this.#jatek[i], szuloElem, i);
    }
  }

  #mozgas(karakter) {
    let balIndex = karakter.getIndex()-1
    let szomszed = karakter-1;
    for (let index = 0; index < this.#jatek.length; index++) {
      if(balIndex == index){

      }
      
    }


  }
}

export default Jatekter;
