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
        for (let x = 0; x < xOldal.length; x++) {
            for (let y = 0; y < yOldal.length; y++) {
                const DIV = $("<div></div>"); // div elem létrehozása jQuery-vel
                DIV.text(`${xOldal[x]}${yOldal[y]}`);
                ARTICLE.append(DIV);
            }
        }
    }
}

export default Palya;
