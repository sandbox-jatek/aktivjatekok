class Inventory {
    #allapot;
    #szuloElem;
    #i;
    #divElem;
    constructor(allapot, szuloElem, i) {
        this.#allapot = allapot;
        this.#szuloElem = szuloElem;
        this.#i = i;
        const DIV = $(`<div id=inv>`);
        DIV.text(allapot);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");
        this.#setAllapot();
        this.#esemenyTrigger();
    }

    #setAllapot() {
        if (this.#allapot == "0") {
            this.#divElem.css("background-color", "bisque");
        }
    }

    getAllapot(){
        return this.#allapot;
    }

    #esemenyTrigger(){
        let esemeny = new CustomEvent("adat", { detail: this });
        window.dispatchEvent(esemeny);
        console.log(esemeny)
    }
}

export default Inventory;