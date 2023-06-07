class Elem{
    #index;
    #allapot = true;
    
    constructor(index,ART){
        this.#index=index;
        ART.append("<div class='elemek'><p> </p></div>");
        this.divElem = $("article div:last-child");
        this.tag = $('article div:last-child p');

        this.divElem.on("click",() =>{
            if ((this.#allapot)) {
                this.Katt();
                this.#allapot = false;
            }
            
        })

    }
    getIndex(){
        return this.#index;
    }
    setPosiSyin(adat , szin){
        this.tag.html(adat);
        this.divElem.css("background-color",szin)
    }
    Katt(){
        const ESEMENY = new CustomEvent("elemKatt",{detail: this});
        window.dispatchEvent(ESEMENY);
    }
    
}
export default Elem