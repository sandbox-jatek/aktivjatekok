class Lampa {
    #allapot
    #id
    #divElem

    constructor(allapot, id, szuloElem) {
        this.#allapot = allapot;
        this.#id = id;


        const DIV = $("<div>").addClass("keret");
        DIV.text(allapot);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");
        console.log(this.#divElem);
        console.log($("div"));
        this.#szinBeallit();
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
            this.#divElem.css("background-color", "black");
        }

    }


}

export default Lampa;
