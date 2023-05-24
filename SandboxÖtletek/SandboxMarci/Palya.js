class Palya {
    #yTengely = [];
    #xTengely = [];
    constructor() {
        this.#yTengely = new Array(15).fill(0).map((_, i) => i + 1);
        this.#xTengely = new Array(15).fill(0).map((_, i) => i + 1);
        this.#tablaMegjelenitese(this.#xTengely, this.#yTengely);
    }

    #tablaMegjelenitese(xOldal, yOldal) {
        const ARTICLE = $("article");
        for (let y = 3; y < yOldal.length; y++) {
          for (let x = 1; x < xOldal.length; x++) {
            const DIV = $("<div></div>");
            DIV.css("background-color", "green");
            ARTICLE.append(DIV);
          }
        }
    }
}

export default Palya;
