import Elem from "./Elem.js"
class Jatekter {
    lista = [];
    #lepes= 0;
    constructor(){
        this.#lepes = 0;
        this.lista = [
            " "," "," ",
            " "," "," ",
            " "," "," " ];
            const ART = $("article");
            for (let index = 0; index < 9; index++) {
                const element = new Elem(index, ART);
                
            }
            $(window).on("elemKatt", (event) => {
                let posi = event.detail;
                if (this.#lepes % 2 ===0) {
                    posi.setPosiSyin("X","red");
                }else{
                    posi.setPosiSyin("O","Blue");
                }
                this.#lepes++;
            })
    }
}
export default Jatekter