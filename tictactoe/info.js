//Le néztem a munkát Tanári munka 
//https://github.com/csefikatalin/harcos_varazslo/blob/master/Info.js
class Info {

    constructor(cim, tartalom, szuloElem) {
        let jatekos;
        if (tartalom == "X") {
           jatekos =  window.localStorage.getItem('jatekosX');  
        }else{
            jatekos =  window.localStorage.getItem('jatekosO');  
        }
        let text = ` <div class="info">
                        <button>❌</button>
                        <h3>${cim}</h3>

                       <p>A nyertes ebben a játékban : ${tartalom}</p>
                       <br>
                       <p>Eddig nyert ${tartalom} : ${jatekos}</p>
                    `;

        text += `</div>`;
        szuloElem.append(text);
        this.infoElem = $(".info");
        this.bezarElem = $(".info button");
        this.bezarElem.on("click", () => this.infoElem.hide());
    }
}
export default Info;