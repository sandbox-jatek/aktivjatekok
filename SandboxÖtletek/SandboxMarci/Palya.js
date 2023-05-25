import Blokle from "./Blokle.js";

class Palya {
  #palyaLista = [
    [1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
  ];

  constructor() {
    this.#tablaMegjelenitese(this.#palyaLista[0].length, this.#palyaLista.length);

  }

  #tablaMegjelenitese(xOldal, yOldal) {


    let id = 0;
    const szuloElem = $("article");
    for (let y = 0; y < yOldal; y++) {
      for (let x = 0; x < xOldal; x++) {

        const blokle = new Blokle(id,this.#palyaLista[x][y],szuloElem);
        id += 1;
      }
    }
  }
}

export default Palya;
