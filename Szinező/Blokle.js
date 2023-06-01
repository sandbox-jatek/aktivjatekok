class Blokle {
    blok;
    #divElem;
    #eredetiHatterszin;
    #eredetiSzovegszin;
    #egyediIndex;

    constructor(id, blok, szuloElem) {
        this.#egyediIndex = 0;
        blok = 0;

        this.blok = blok;

        this.id = id;

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

    szinbeallit(szinkod) {
        switch (szinkod) {
            case 0:
                console.log(this.#divElem);
                this.#divElem.css("background-color", "red");
                break;
            case 1:
                this.#divElem.css("background-color", "blue");
                break;
            case 2:
                this.#divElem.css("background-color", "brown");
                break;
            case 3:
                this.#divElem.css("background-color", "darkblue");
                break;
            default:
                this.#divElem.css("background-color", "white");
        }
    }

    blokLerakEsFelvessz() {
        if (this.blok === 0) {
            this.szinbeallit(this.blok);
        }
        if (this.blok === 1) {
            this.szinbeallit(this.blok);
        }
        if (this.blok === 2) {
            this.szinbeallit(this.blok);
        }
        if (this.blok === 3) {
            this.szinbeallit(this.blok);
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

        getEgyediIndex() {
            return this.#egyediIndex;
        }
    }

export default Blokle;
