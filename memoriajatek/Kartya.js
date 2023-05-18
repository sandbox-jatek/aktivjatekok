class Kartya {
  #fajlnev;
  #allapot;
  #blokkolt;
  #divElem;
  #imgElem;

  constructor(fajlnev, szuloElem) {
    this.#fajlnev = fajlnev;
    szuloElem.append(`<div class="kartya"><img src="" alt="kep"></div>`);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img");

    this.#allapot = false;
    this.#setLap();

    this.#blokkolt = false;
    this.#divElem.on("click", () => {
      if (this.#blokkolt) {
        return;
      }
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

  getFajlnev(adat) {
    return this.#fajlnev;
  }
  #setLap() {
    if (this.#allapot) {
      this.#imgElem.attr("src", this.#fajlnev);
    } else {
      this.#imgElem.attr("src", "kepek/hatter.jpg");
    }
  }
  kattintas(adat) {
    this.#allapot = !this.#allapot;
    this.#setLap();
  }

  #kattintasTrigger() {
    let esemeny = new CustomEvent("kattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }

  eltuntet(adat) {
    this.#divElem.css("visibility", "hidden");
  }
}

export default Kartya;
