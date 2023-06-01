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
            this.szomszedokKeresese(this.#db);
            
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
        const sorIndex = Math.floor(id / this.#db);
        const oszlopIndex = id % this.#db;
        
        const szomszedFelsoSor = sorIndex > 0 ? (sorIndex - 1) * this.#db + oszlopIndex : null;
        const szomszedAlsoSor = sorIndex < this.#db - 1 ? (sorIndex + 1) * this.#db + oszlopIndex : null;
        const szomszedBal = oszlopIndex > 0 ? sorIndex * this.#db + (oszlopIndex - 1) : null;
        const szomszedJobb = oszlopIndex < this.#db - 1 ? sorIndex * this.#db + (oszlopIndex + 1) : null;

        const szomszedek = [szomszedFelsoSor, szomszedAlsoSor, szomszedBal, szomszedJobb, id];

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
