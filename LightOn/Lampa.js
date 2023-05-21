class Lampa {
    #allapot
    #id
    #divElem
    static #pontDb = 0;
  
    constructor(allapot, id, szuloElem) {
      this.#allapot = allapot;
      this.#id = id;
  
      const DIV = $("<div>").addClass("keret kapcsolas");
      DIV.text(allapot);
      szuloElem.append(DIV);
      this.#divElem = szuloElem.children("div:last-child");
  
      this.#szinBeallit();
      this.#divElem.on("click", () => {
        this.#kattintasTrigger("kapcsolas");
        this.#pontSzamlalas();
      });
  
      this.pontokKiiratasa();
    }
  
    setAllapot() {
      if (this.#allapot == 0) {
        this.#allapot = 1;
      } else {
        this.#allapot = 0;
      }
      this.#szinBeallit();
     
    }
  
    #szinBeallit() {
      if (this.#allapot === 0) {
        this.#divElem.css("background-color", "yellow");
        this.#divElem.css("color", "yellow");
      } else {
        this.#divElem.css("background-color", "white");
        this.#divElem.css("color", "white");
      }
    }
  
    #kattintasTrigger(esemenyNev) {
      const E = new CustomEvent(esemenyNev, { detail: this });
      console.log("teszt");
      window.dispatchEvent(E);
    }
  
    #pontSzamlalas() {
      Lampa.#pontDb += 1;
      this.pontokKiiratasa();
      console.log(Lampa.#pontDb);
    }
  
    pontokKiiratasa() {
      const PONTSZAMLALO = $("#pontSzamlalo");
      PONTSZAMLALO.text(Lampa.#pontDb);
    }
  }
  
  export default Lampa;
  