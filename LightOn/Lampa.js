class Lampak {
    #allapot
    #id
    #divElem

    constructor(allapot, id, szuloElem) {
        this.#allapot = allapot;
        this.#id = id;
        this.#divElem = szuloElem;
    }

    setAllapot() {
        divElem.addEventListener('click', () => {
            id++;
            this.#szinBeallit();
        });
    }

    #szinBeallit() {
        if (allapot[id] === 1) {
            divElem.style.backgroundColor = 'yellow';
        } else {
            divElem.style.backgroundColor = 'black';
            id = 0;
        }
    }

    
}

export default Lampak;
