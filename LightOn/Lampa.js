class Lampa {
    #allapot
    #id
    #divElem

    constructor(allapot, id, szuloElem) {
        this.#allapot = allapot;
        this.#id = id;


        const DIV = $("<div>").addClass("keret kapcsolas");
        DIV.text(allapot);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");
        //console.log(this.#divElem);
        //console.log($("div"));
        this.#szinBeallit();
        this.#divElem.on("kapcsolas", () => {
            this.#kattintasTrigger("kapcsolas");
        });
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

        } else {
            this.#divElem.css("background-color", "white");
        }

    }

    #kattintasTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: this.#id })
        console.log("teszt");
        window.dispatchEvent(E);
    }
}

export default Lampa;
