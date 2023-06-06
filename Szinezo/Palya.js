import Festokeszlet from "./Festokeszlet.js";
import Szinek from "./Szinek.js";
class Palya {
  #palyaLista = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  ];

  #inventory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  #blokLista = [];
  #aktualisSzin;
  constructor() {
    this.#tablaMegjelenitese(this.#palyaLista[0].length, this.#palyaLista.length);
    this.#inventoryMegjelenitese(this.#inventory.length);
    
    
    $(window).on("szinvalasztas", (event) => {
      console.log(event.detail.szinkod)
      this.#aktualisSzin = event.detail.szinkod;
    });

    $(window).on("kapcsolas", (event) => {
      this.#palyaLista = this.#palyaLista;
      event.detail.szinbeallit(this.#aktualisSzin);
      
    })
  }

  #tablaMegjelenitese(xOldal, yOldal) {
    let id = 0;
    const szuloElem = $("article");
    for (let y = 0; y < yOldal; y++) {
      for (let x = 0; x < xOldal; x++) {

        const SZINEK = new Szinek(id, this.#palyaLista[x][y], szuloElem);
        id += 1;
        this.#blokLista.push(SZINEK);
      }
    }
  }

  #inventoryMegjelenitese(yOldal) {
    let id = 0;
    const szuloElem = $("aside");
    for (let y = 0; y < yOldal; y++) {

      const FESTKESZLET = new Festokeszlet(id, this.#inventory[y], szuloElem,);

      id += 1;

    }
  }
}

export default Palya;
