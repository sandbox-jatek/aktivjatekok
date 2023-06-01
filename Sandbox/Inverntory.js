class Inventory {
    #allapot;
    #szuloElem;
    #i;
    #divElem;
    #imgElem;
    #kepek = [];
    constructor(allapot, szuloElem, i, kepek) {
        this.#kepek = kepek;
        this.#allapot = allapot;
        this.#szuloElem = szuloElem;
        this.#i = i;
        const IMG = $(`<img src="" alt="kep1">`);
        const DIV = $(`<div id=inv>`);
        DIV.append(IMG);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img");
        this.#setAllapot();
        this.#esemenyTrigger();
    }

    #setAllapot() {
        if (this.#allapot == 0) {
            this.#imgElem.attr("src", this.#kepek[9]);
        }
    }

    getAllapot(){
        return this.#allapot;
    }

    #esemenyTrigger(){
        let esemeny = new CustomEvent("adat", { detail: this });
        window.dispatchEvent(esemeny);
    }
}

export default Inventory;