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
        this.#allapotLista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        for (let index = 0; index < this.#meret; index++) {
            let random = Math.floor(Math.random()*2)
            if (random === 1) {
                this.#allapotLista[index] = 1;
            }else{
                this.#allapotLista[index] = 0;
            }
        }
        
        this.#setAllapotListaMegjelenites();

        $(window).on("kapcsolas", (event) =>{
            console.log(event.detail);
            event.detail.setAllapot();
        })

    }

    #setAllapotListaMegjelenites() {
        const ARTICLE = $("article");
        for (let i = 0; i < this.#allapotLista.length; i++) {
            new Lampa( this.#allapotLista[i],i,ARTICLE)
        }
    }

    
}

export default JatekTer;
