class Blokle {
    #blok;
    #divElem;
    #eredetiHatterszin;
    #eredetiSzovegszin;

    constructor() {
        const szuloElem = $(".kapcsolas");
        this.#blok = 0;
        this.#divElem = szuloElem;

        const DIV = $("<div>").addClass("keret kapcsolas");
        DIV.text(this.#blok);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");

        this.#eredetiHatterszin = this.#divElem.css("background-color");
        this.#eredetiSzovegszin = this.#divElem.css("color");

        this.#blokLerakEsFelvessz();
        this.#divElem.on("click", () => {
            this.#kattintasTrigger("kapcsolas");
            this.#blokLerakEsFelvessz();
            this.#setBlok();
        });
    }

    #blokLerakEsFelvessz() {
        if (this.#blok === 0) {
            this.#divElem.css("background-color", "white");
            this.#divElem.css("color", "white");
        } else {
            this.#divElem.css("background-color", this.#eredetiHatterszin);
            this.#divElem.css("color", this.#eredetiSzovegszin);
        }
    }

    #setBlok() {
        if (this.#blok === 0) {
            this.#blok = 1;
        } else {
            this.#blok = 0;
        }
    }

    #kattintasTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: this });
        console.log("teszt");
        window.dispatchEvent(E);
    }
}

export default Blokle;
