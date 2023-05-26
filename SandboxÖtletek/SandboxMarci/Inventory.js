
class Inventory {
    szinkod;
    #divElem;
    #egyediIndex;

    constructor(id, szinkod, szuloElem) {
        this.#egyediIndex = 0;
        this.szinkod = szinkod;
        this.id = id;
        szinkod = id;
        const DIV = $("<div>").addClass("keret kapcsolas");
        DIV.text(this.szinkod);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");

        console.log(this.id)
       // this.kattintasTrigger("kapcsolas");
        this.#szinAtvetel();
        this.#alapSzinek(szinkod);
        
    }

    #szinAtvetel(){
        
        this.#divElem.on("click", () => {
            this.kattintasTrigger("szinvalasztas");

        });
    }

    #alapSzinek(id) {
        console.log(id);
        switch (id) {
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


    kattintasTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: this });
        window.dispatchEvent(E);
    }

    getEgyediIndex() {
        return this.#egyediIndex;
    }
}

export default Inventory;