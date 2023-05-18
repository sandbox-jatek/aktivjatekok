import Kartya from "./Kartya.js";

class Jatekter{
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(kartyaLista){
        this.#kartyaLista = kartyaLista;
        this.#init();

    }

    #init(){
        this.#kivalasztottKartyaLista = [];
        this.#kever();
        const szuloElem = $("article");
        szuloElem.empty();
        for (let index = 0; index < this.#kartyaLista.length; index++) {
            const kartya = new Kartya(this.#kartyaLista[index], szuloElem);
            
            
        }

        $(window).on("kattintas", (event) =>{
            this.#kivalasztottKartyaLista.push(event.detail);
            console.log(this.#kivalasztottKartyaLista);
            this.#ellenorzes();
        })

    }
    #kever(){
        this.#kartyaLista.sort(function (){
            return 0.5 - Math.random();
        })

    }
    #ellenorzes(){
        if(this.#kivalasztottKartyaLista.length == 2){
            this.#TriggerBlocked();
            if(this.#kivalasztottKartyaLista[0].getFajlnev() === this.#kivalasztottKartyaLista[1].getFajlnev()){
                this.#kivalasztottKartyaLista[0].eltuntet();
                this.#kivalasztottKartyaLista[1].eltuntet();
                this.#kivalasztottKartyaLista.splice(0, 2);

                this.#TriggerUnBlocked();
            }
        }else{
            setTimeout(() =>{
                this.#kivalasztottKartyaLista[0].kattintas();
                this.#kivalasztottKartyaLista[1].kattintas();
                this.#kivalasztottKartyaLista.splice(0, 2);

                this.#TriggerUnBlocked();
            }, 1000);
        }

    }
    #TriggerBlocked(){
        window.dispatchEvent(new Event("gameBlocked"));

    }

    #TriggerUnBlocked(){
        window.dispatchEvent(new Event("gameUnBlocked"));

    }
}

export default Jatekter;