import Elem from "./Elem.js";
import Info from "./info.js";
class Jatekter {
  lista = [];
  #lepes = 0;
  #nyertes = "";
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
      this.jatekosallas();
      if (this.#lepes % 2 === 0) {
        posi.setPosiSyin("X", "red");
        this.lista[posi.getIndex()] = "X";
      } else {
        posi.setPosiSyin("O", "Blue");
        this.lista[posi.getIndex()] = "O";
      }
      let kesz = this.ellenorzes();
      this.#lepes++;
      this.#nyertes = kesz;
      if (this.#nyertes == "X" || this.#nyertes == "O") {
        this.jatekvege();

        
      }
    });
    $("#nyeresReset").click("katt",(event)=>{
      window.localStorage.removeItem("jatekosX");
      window.localStorage.removeItem("jatekosO");
    }) 
  }
  jatekosallas(){

  }
  jatekvege() {
    let pontX;
    let pontO;
    console.log(window.localStorage.getItem("jatekosX"));
    if (window.localStorage.getItem("jatekosX") == null) {
      pontX = 1;
    } else {
      pontX = parseInt(window.localStorage.getItem("jatekosX")) + 1;
    }
    if (window.localStorage.getItem("jatekosO") == null) {
      pontO = 1;
    } else {
      pontO = parseInt(window.localStorage.getItem("jatekosO")) + 1;
    }
    if (this.#nyertes == "O") {
      window.localStorage.setItem("jatekosO", pontO);
    }
    if (this.#nyertes == "X") {
      window.localStorage.setItem("jatekosX", pontX);
    }
    new Info("A játék vége", this.#nyertes, $("body"));
    $("div").off("click");
    return this.#nyertes;
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
