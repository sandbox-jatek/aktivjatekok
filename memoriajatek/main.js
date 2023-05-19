import Aszinkron from "./Aszinkron.js";
import Jatekter from "./Jatekter.js";

$(function () {
  const ASZINKRON = new Aszinkron();
  let vegpont = "adat.json";
  ASZINKRON.adatBeolvas(vegpont, Megjelenit);
});
function Megjelenit(lista) {
  let sajatLista = lista.kepekLista;
  console.log(sajatLista);
  new Jatekter(sajatLista);
}
