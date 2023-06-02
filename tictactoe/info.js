//Le néztem a munkát Tanári munka 
//https://github.com/csefikatalin/harcos_varazslo/blob/master/Info.js
class Info {
    #tartalom = [];
    constructor(cim, tartalom, szuloElem) {
        let text = ` <div class="info">
                        <button>❌</button>
                        <h3>${cim}</h3>

                       <p>A nyertes ebben a játékban : ${tartalom}</p>
                    `;

        text += `</div>`;
        szuloElem.append(text);
        this.infoElem = $(".info");
        this.bezarElem = $(".info button");
        this.bezarElem.on("click", () => this.infoElem.hide());
    }
}
export default Info;