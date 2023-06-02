import Lampa from "./Lampa.js";

class JatekTer {
    #db;
    #meret;
    #lepes;
    #allapotLista = [];

    constructor() {
        this.#db = 3;
        this.#lepes = 0;
        this.#meret = this.#db * this.#db;
        this.#allapotLista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        for (let index = 0; index < this.#meret; index++) {
            let random = Math.floor(Math.random() * 2)
            if (random === 1) {
                this.#allapotLista[index] = 1;
            } else {
                this.#allapotLista[index] = 0;
            }
        }

        this.#setAllapotListaMegjelenites();


        $(window).on("kapcsolas", (event) => {
            console.log(event.detail);
            event.detail.setAllapot();
            this.szomszedokKeresese(event.detail.id);

        });

    }

    #setAllapotListaMegjelenites() {
        const ARTICLE = $("article");
        ARTICLE.empty();
        for (let i = 0; i < this.#allapotLista.length; i++) {
            new Lampa(this.#allapotLista[i], i, ARTICLE);
        }

    }

    szomszedokKeresese(id) {
    
        const szomszedFelsoSor = id > 5 ? id : id + 3;
        const szomszedAlsoSor = id < 3 ? id : id - 3;;
        const szomszedBal = id % 3 == 0 ? id : id - 1;;
        const szomszedJobb = id % 3 == 2 ? id : id + 1;
        const szomszedek = [szomszedFelsoSor, szomszedAlsoSor, szomszedBal, szomszedJobb, id];
        console.log(szomszedek)
        for (const szomszed of szomszedek) {
            if (szomszed !== null) {
                if (this.#allapotLista[szomszed] === 1) {
                    this.#allapotLista[szomszed] = 0;
                } else {
                    this.#allapotLista[szomszed] = 1;
                }
            }
        }

        this.#setAllapotListaMegjelenites();



    }
}



export default JatekTer;
