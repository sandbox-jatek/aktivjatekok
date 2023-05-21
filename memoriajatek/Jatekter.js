import Kartya from "./Kartya.js";

class Jatekter {
  #kivalasztottKartyaLista = [];
  #sajatLista = [];
  #szamlalo = 0;

  constructor(lista) {
    this.#sajatLista = lista;
    this.#init();
  }

  #init() {
    this.#kever(this.#sajatLista);
    const szuloElem = $("article");
    szuloElem.empty();
    for (let index = 0; index < this.#sajatLista.length; index++) {
      const kartya = new Kartya(this.#sajatLista[index], szuloElem, index);
    }

    $(window).on("kattintas", (event) => {
      this.#kivalasztottKartyaLista.push(event.detail);
      this.#ellenorzes();
    });
  }
  #kever() {
    this.#sajatLista.sort(function () {
      return 0.5 - Math.random();
    });
  }
  #ellenorzes() {
    if (this.#kivalasztottKartyaLista.length == 2) {
      if (
        this.#kivalasztottKartyaLista[0].getEgyediIndex() !=
        this.#kivalasztottKartyaLista[1].getEgyediIndex()
      ) {
        this.#TriggerBlocked();
        if (
          this.#kivalasztottKartyaLista[0].getFajlnev() ===
          this.#kivalasztottKartyaLista[1].getFajlnev()
        ) {
          this.#kivalasztottKartyaLista[0].eltuntet();
          this.#kivalasztottKartyaLista[1].eltuntet();
          this.#kivalasztottKartyaLista.splice(0, 2);
          this.#szamlalo++

          this.#TriggerUnBlocked();
        } else {
          setTimeout(() => {
            this.#kivalasztottKartyaLista[0].kattintas();
            this.#kivalasztottKartyaLista[1].kattintas();
            this.#kivalasztottKartyaLista.splice(0, 2);

            this.#TriggerUnBlocked();
          }, 500);
        }
      } else{
        this.#kivalasztottKartyaLista.splice(0, 2);
      }
    }
    if(this.#szamlalo == 20){
      alert("Gratulálok kivitted a játékot!");
    }
  }
  
  #TriggerBlocked() {
    window.dispatchEvent(new Event("gameBlocked"));
  }

  #TriggerUnBlocked() {
    window.dispatchEvent(new Event("gameUnBlocked"));
  }
}

export default Jatekter;
