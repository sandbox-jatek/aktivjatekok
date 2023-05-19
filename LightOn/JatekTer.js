import Lampak from "./Lampa.js";

class JatekTer {
    #db;
    #meret;
    #lepes;
    #allapotLista = [];

    constructor(db, meret, lepes, allapotLista) {
        this.#db = db;
        this.#lepes = lepes;
        this.#meret = meret;
        this.#allapotLista = allapotLista;
        this.#setAllapotLista();
    }

    #setAllapotLista() {
        const ARTICLE = $("article");
        const allapotLista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

        for (let i = 0; i < allapotLista.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                ARTICLE.append($("<br>"));
            }
            
            const DIV = $("<div>").addClass("keret");
            DIV.text(allapotLista[i]);

            ARTICLE.append(DIV);
        }
    }
}

export default JatekTer;
