class Palya{
    #yTengely=[];
    #xTengely=[];
    #id;
    constructor(){

        this.#id = 30;
        this.#yTengely=["A","B","C","D","E","F","G","H","I","J"];
        this.#xTengely =[this.#id];
        this.#tablaMegjelenitese(this.#xTengely, this.#yTengely);
    }

    #tablaMegjelenitese(xOldal, yOldal){
        const ARTICLE = $("article");
        const DIV = $("div");
        for (let x = 0; x < xOldal.length; x++) {
           for (let y = 0; y < yOldal.length; y++) {
            DIV.textContent = `${xOldal[x]}${yOldal[y]}`; 
            ARTICLE.append(DIV);
           }
            
        }
    }
}

export default Palya;