class Karakter{
    #balLab
    #jobbLab
    #test
    constructor(){
        this.#test  = "U";
        this.#balLab = 0;
        this.#jobbLab = 0;

        this.#test.on("click", () => {
            this.#iranyDontes(jobbLab, balLab);
          });
        
    }
    #setBal(){
        this.#balLab=balLab;
    }
    #setJobb(){
        this.#jobbLab = jobbLab;
    }

    #iranyDontes(jobb, bal){
        let irany = 0;
        if (jobb >= 1) {
            irany++;
        }
        else{
            bal -= irany;
            irany--;
        }
    }
}

export default Karakter;