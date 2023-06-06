
class Festokeszlet {
    szinkod;
    #divElem;


    constructor(id, szinkod, szuloElem) {
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

    #szinAtvetel() {

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
                this.#divElem.css("color", "red");
                break;
            case 1:
                this.#divElem.css("background-color", "orange");
                this.#divElem.css("color", "orange");
                break;
            case 2:
                this.#divElem.css("background-color", "yellow");
                this.#divElem.css("color", "yellow");
                break;
            case 3:
                this.#divElem.css("background-color", "darkgreen");
                this.#divElem.css("color", "darkgreen");
                break;
            case 4:
                this.#divElem.css("background-color", "green");
                this.#divElem.css("color", "green");
                break;
            case 5:
                this.#divElem.css("background-color", "lightgreen");
                this.#divElem.css("color", "lightgreen");
                break;
            case 6:
                this.#divElem.css("background-color", "darkgray");
                this.#divElem.css("color", "darkgray");
                break;
            case 7:
                this.#divElem.css("background-color", "gray");
                this.#divElem.css("color", "gray");
                break;
            case 8:
                this.#divElem.css("background-color", "lightgray");
                this.#divElem.css("color", "lightgray");
                break;
            case 9:
                this.#divElem.css("background-color", "darkblue");
                this.#divElem.css("color", "darkblue");
                break;
            case 10:
                this.#divElem.css("background-color", "lightblue");
                this.#divElem.css("color", "lightblue");
                break;
            case 11:
                this.#divElem.css("background-color", "white");
                this.#divElem.css("color", "white");
                break;
            case 12:
                console.log(this.#divElem);
                this.#divElem.css("background-color", "lightcyan");
                this.#divElem.css("color", "lightcyan");
                break;
            case 13:
                this.#divElem.css("background-color", "cyan");
                this.#divElem.css("color", "cyan");
                break;
            case 14:
                this.#divElem.css("background-color", "gold");
                this.#divElem.css("color", "gold");
                break;
            case 15:
                this.#divElem.css("background-color", "darkorange");
                this.#divElem.css("color", "darkorange");
                break;
            case 16:
                this.#divElem.css("background-color", "#3CB371");
                this.#divElem.css("color", "#3CB371");
                break;
            case 17:
                this.#divElem.css("background-color", "#2E8B57");
                this.#divElem.css("color", "#2E8B57");
                break;
            case 18:
                this.#divElem.css("background-color", "#483D8B");
                this.#divElem.css("color", "#483D8B");
                break;
            case 19:
                this.#divElem.css("background-color", "#191970");
                this.#divElem.css("color", "#191970");
                break;
            case 20:
                this.#divElem.css("background-color", "#7B68EE");
                this.#divElem.css("color", "#7B68EE");
                break;
            case 21:
                this.#divElem.css("background-color", "#778899");
                this.#divElem.css("color", "#778899");
                break;
            case 22:
                this.#divElem.css("background-color", "#708090");
                this.#divElem.css("color", "#708090");
                break;
            case 23:
                this.#divElem.css("background-color", "black");
                this.#divElem.css("color", "black");
                break;
            default:
                this.#divElem.css("background-color", "white");
                this.#divElem.css("color", "white");
            
        }
    }


    kattintasTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: this });
        window.dispatchEvent(E);
    }


}

export default Festokeszlet;