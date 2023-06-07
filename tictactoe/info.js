//Le néztem a munkát Tanári munka 
//https://github.com/csefikatalin/harcos_varazslo/blob/master/Info.js
class Info {

    constructor(cim, tartalom, szuloElem) {

        let text = ` <div class="info">
                        <button>❌</button>
                        <h3>${cim}</h3>

                       <p>A nyertes ebben a játékban : ${tartalom}</p>
                       <br>
                       <p>Eddig nyert X : ${window.localStorage.getItem('jatekosX')  }</p>
                       <p>Eddig nyert O : ${window.localStorage.getItem('jatekosO')  }</p>
                    `;

        text += `</div>`;
        szuloElem.append(text);
        this.infoElem = $(".info");
        this.bezarElem = $(".info button");
        this.bezarElem.on("click", () => this.infoElem.hide());
    }
}
export default Info;