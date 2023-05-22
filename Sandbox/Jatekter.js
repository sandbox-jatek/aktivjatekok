import Jatek from "./Jatek.js";

class Jatekter {
  #jatek = ["0", "0", "0", "0", "0","0","0"];
  #tarhely = []
  constructor() {
    this.#spawn();
    this.#init();
    $(window).on("kattintas", (event) => {
      this.#tarhely.push(event.detail);
      if(this.#tarhely.length == this.#jatek.length){
        this.ellenorzes(this.#tarhely);
      }
    });

    $(window).on("kattintas2", (event) => {
      this.#tarhely.push(event.detail);
      if(this.#tarhely.length == this.#jatek.length){
        this.ellenorzes2(this.#tarhely);
      }
    });

  }
  #init() {
    const szuloElem = $("article");
    for (let i = 0; i < this.#jatek.length; i++) {
      const jatek = new Jatek(this.#jatek[i], szuloElem, i);
    }
  }

  #mozgasbalra(karakter, lepes) {
    for (let index = 0; index < this.#jatek.length; index++) {
      if (karakter == index) {
        this.#tarhely[lepes].setMozgas();
        this.#tarhely[karakter].setMozgas();
        this.#tarhely = $().empty();
      }
    }
  }
  #mozgasjobbra(karakter, lepes){
    for (let index = 0; index < this.#jatek.length; index++) {
      if (karakter == index) {
        this.#tarhely[lepes].setMozgas();
        this.#tarhely[karakter].setMozgas();
        this.#tarhely = $().empty();
      }
    }
  }


  #spawn(){
    let szam = Math.floor(Math.random()*this.#jatek.length);
    for(let i = 0; i < this.#jatek.length; i++){
      if(i == szam){
        this.#jatek[i] = "K";
      }
    }
  }
  ellenorzes(adat){
    for(let i = 0; i < adat.length; i++){
      if (adat[i].getAllapot() == "K") {
        this.#mozgasbalra(adat[i].getIndex(), adat[i-1].getIndex());
      }
    }
  }
  ellenorzes2(adat){
    for(let i = 0; i < adat.length; i++){
      if (adat[i].getAllapot() == "K") {
        this.#mozgasjobbra(adat[i].getIndex(), adat[i+1].getIndex());
      }
    }
  }
}

export default Jatekter;
