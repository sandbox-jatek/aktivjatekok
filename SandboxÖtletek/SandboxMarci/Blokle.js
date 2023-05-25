class Blokle {
    blok;
    #divElem;
    #eredetiHatterszin;
    #eredetiSzovegszin;
    #egyediIndex;

    constructor(id,blok,szuloElem) {
        this.#egyediIndex=0;
        blok = 0;
        
        this.blok = blok;
      
       this.id=id;

        const DIV = $("<div>").addClass("keret kapcsolas");
        DIV.text(this.blok);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");

        this.#eredetiHatterszin = this.#divElem.css("background-color");
        this.#eredetiSzovegszin = this.#divElem.css("color");

        this.blokLerakEsFelvessz();
        this.#divElem.on("click", () => {
            console.log(this.id)
             this.kattintasTrigger("kapcsolas");
             this.setBlok();
            this.blokLerakEsFelvessz();
            
        });
    }

    blokLerakEsFelvessz() {
        if (this.blok === 0) {
            this.#divElem.css("background-color", "white");
            this.#divElem.css("color", "white");
        } else {
            this.#divElem.css("background-color", this.#eredetiHatterszin);
            this.#divElem.css("color", this.#eredetiSzovegszin);
        }
    }

    setBlok() {
        if (this.blok === 0) {
            this.blok = 1;
        } else {
            this.blok = 0;
        }
    }

    kattintasTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: this });
        console.log("teszt");
        window.dispatchEvent(E);
    }

    getEgyediIndex(){
        return this.#egyediIndex;
    }
}

export default Blokle;
