class Block {
  #allapot;
  #y;
  #x;
  #divElem;
  #imgElem;
  #kepek = [];
  constructor(allapot, szuloElem, y, x, kepek) {
    this.#kepek = kepek;
    this.#y = y;
    this.#x = x;
    this.#allapot = allapot;
    const IMG = $(`<img src="" alt="kep1">`);
    const DIV = $(`<div id=${this.#y}${this.#x}>`);
    DIV.append(IMG);
    szuloElem.append(DIV);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.#setAllapot(this.#allapot);

    this.mozgas();
  }

  #setAllapot(allapot) {
    
    if (allapot == 0) {
      this.#imgElem.attr("src", this.#kepek[1]);
    } else if (allapot == 1) {
      this.#imgElem.attr("src", this.#kepek[0]);
    } else if (allapot == "K") {
      this.#imgElem.attr("src", this.#kepek[5]);
    } else if (allapot == "B") {
      this.#imgElem.attr("src", this.#kepek[4]);
    } else if (allapot == 2) {
      this.#imgElem.attr("src", this.#kepek[3]);
    } else if (allapot == 3) {
      this.#imgElem.attr("src", this.#kepek[2]);
    } else if (allapot == 4) {
      this.#imgElem.attr("src", this.#kepek[6]);
    }
    else if (allapot == 5) {
      this.#imgElem.attr("src", this.#kepek[7]);
    }
    else if (allapot == 6) {
      this.#imgElem.attr("src", this.#kepek[8]);
    }
  }

  getY() {
    return this.#y;
  }

  getX() {
    return this.#x;
  }

  getAllapot() {
    return this.#allapot;
  }

  setMozgas() {
    if (this.#allapot == 0) {
      this.#allapot = "K";
      this.#setAllapot(this.#allapot);
    } else {
      this.#allapot = "0";
      this.#setAllapot(this.#allapot);
    }
  }

  mozgas() {
    $(window).on("keydown", () => {
      if (event.which === 65 || event.which === 37) {
        let esemeny = new CustomEvent("balra", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
    $(window).on("keydown", () => {
      if (event.which === 68 || event.which === 39) {
        let esemeny = new CustomEvent("jobbra", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
    $(window).on("keydown", () => {
      if (event.which === 87 || event.which === 38) {
        let esemeny = new CustomEvent("fel", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });

    this.#divElem.on("click", () => {
      this.#kattintasTrigger();
    });
    $(window).on("click", () => {
      this.#kattintasTrigger2();
    });
  }

  #kattintasTrigger() {
    let esemeny = new CustomEvent("kattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }

  #kattintasTrigger2() {
    let esemeny = new CustomEvent("kattintas2", { detail: this });
    window.dispatchEvent(esemeny);
  }

  setBlock(block, csere) {
    if(block.getAllapot() == 0){
      if(csere == 0){
        block.#allapot = 1;
        block.#imgElem.attr("src", this.#kepek[0]);
      }else if(csere == 1){
        block.#allapot = 3;
        block.#imgElem.attr("src", this.#kepek[2]);
      }
      else if(csere == 2){
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[3]);
      }
      else if(csere == 3){
        block.#allapot = 6;
        block.#imgElem.attr("src", this.#kepek[8]);
      }
      else if(csere == 4){
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[7]);
      }
      else if(csere == 5){
        block.#allapot = 4;
        block.#imgElem.attr("src", this.#kepek[6]);
      }else if(csere == 6){
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[17]);
      }
      else if(csere == 7){
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[18]);
      }
      else{
        block.#allapot = 1;
        block.#imgElem.attr("src", this.#kepek[0]);
      }
    }else{
      block.#allapot = 0;
      block.#imgElem.attr("src", this.#kepek[1]);
    }
    
  }

  setFu() {
    if (this.#allapot == 1) {
      this.#allapot = 3;
      this.#setAllapot(this.#allapot);
    }
  }
}

export default Block;
