class Kartya {
  #egyediIndex
  #fajlnev;
  #allapot;
  #blokkolt;
  #divElem;
  #imgElem;
  static #szamlalo = 0;

  constructor(fajlnev, szuloElem, i) {
    this.#egyediIndex = i;
    this.#fajlnev = fajlnev;
    szuloElem.append(`<div id=${this.#egyediIndex}><img class="kartya" src="" alt="kep"></div>`);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.#szamlaloMegjelenit();

    this.#allapot = false;
    this.#setLap();

    this.#blokkolt = false;
    this.#divElem.on("click", () => {
      if (this.#blokkolt) {
        return;
      }
      this.#szamlalas();
      this.kattintas();
      this.#kattintasTrigger();
    });

    $(window).on("gameBlocked", () => {
      this.#blokkolt = true;
    });

    $(window).on("gameUnBlocked", () => {
      this.#blokkolt = false;
    });
  }

  getEgyediIndex(){
    return this.#egyediIndex
  }

  getFajlnev() {
    return this.#fajlnev;
  }
  #setLap() {
    if (this.#allapot) {
      this.#imgElem.attr("src", this.#fajlnev);
    } else {
      this.#imgElem.attr("src", "kepek/hatter.jpg");
    }
  }
  kattintas() {
    this.#allapot = !this.#allapot;
    this.#setLap();
  }

  #kattintasTrigger() {
    let esemeny = new CustomEvent("kattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }

  eltuntet() {
    this.#divElem.css("visibility", "hidden");
  }
  #szamlalas() {
    Kartya.#szamlalo++;
    this.#szamlaloMegjelenit();
  }
  #szamlaloMegjelenit() {
    const asideElem = $("aside h3");
    asideElem.text(Kartya.#szamlalo);
  }
}

export default Kartya;
