import Lampa from "./Lampa.js";

class JatekTer {
    #db;
    #meret;
    #lepes;
    #allapotLista = [];

    constructor() {
        this.#db = 3;
        this.#lepes = 0;
        this.#meret = this.#db*this.#db;
        this.#allapotLista = [1,1,0,0,1,0,0,0,1];
        this.#setAllapotListaMegjelenites();
    }

    #setAllapotListaMegjelenites() {
        const ARTICLE = $("article");
        const allapotLista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

        for (let i = 0; i < this.#allapotLista.length; i++) {
            new Lampa( this.#allapotLista[i],i,ARTICLE)
        }
    }
}

export default JatekTer;
