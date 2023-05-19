import Elem from "./Elem.js";
class Jatekter {
  lista = [];
  #lepes = 0;
  //https://github.com/csefikatalin/harcos_varazslo
  //felugro elem nézd meg 
  constructor() {
    this.#lepes = 0;
    this.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const ART = $("article");
    for (let index = 0; index < 9; index++) {
      const element = new Elem(index, ART);
    }
    $(window).on("elemKatt", (event) => {
      let posi = event.detail;
      if (this.#lepes % 2 === 0) {
        posi.setPosiSyin("X", "red");
        this.lista[posi.getIndex()] = "X";
      } else {
        posi.setPosiSyin("O", "Blue");
        this.lista[posi.getIndex()] = "O";
      }
      let kesz = this.ellenorzes();
      this.#lepes++;
      posi.NyertesKiir(kesz);
    
    });
  }
  vizSzintes() {
    let txt = "";
    for (let i = 0; i < this.lista.length; i++) {
      if (i % 3 === 0) {
        txt += "@";
      }
      txt += this.lista[i];
    }
    return txt;
  }
  fuggoleges() {
    let txt = "";
    for (let i = 0; i < 3; i++) {
      txt += this.lista[i] + this.lista[i + 3] + this.lista[i + 6];
      txt += "@";
    }
    return txt;
  }
  atlo() {
    let txt = "";
    txt += this.lista[0] + this.lista[4] + this.lista[8];
    txt += "@";
    txt += this.lista[2] + this.lista[4] + this.lista[6];
    console.log(txt);
    return txt;
  }
  ellenorzes() {
    let nyert = "";
    let osszegzesTXT =
      this.vizSzintes() + "@" + this.fuggoleges() + "@" + this.atlo() + "@";
    console.log(osszegzesTXT);
    if (osszegzesTXT.includes("OOO")) {
      nyert = "O";
    } else if (osszegzesTXT.includes("XXX")) {
      nyert = "X";
    } else if (
      !osszegzesTXT.includes("XXX") &&
      !osszegzesTXT.includes("OOO") &&
      !osszegzesTXT.includes(" ") 
    ) {
      nyert = "Döntetlen";
    }
    return nyert;
  }
}

export default Jatekter;
