import numberUrlapView from "./NumberUrlapView.js";
import textUrlapView from "./TextUrlapView.js";
import { adatLeiras } from "./adat.js";

export default class UrlapView {
  #formAdat = {};
  $inputElemObjektumokListaja = []; //Itt tároljuk azokat az objektumokat, amelyek létrehozzák az input elemeket
  constructor(szuloElem) {
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");
    console.log("view");
    console.log(this.formElem);

    this.htmlOszeallit();
    /*Submit gomb kezelése
         1. létrehozom a gombhoz a "kapaszkodót"
         2. hozzárendelem az eseményt
         3. ebben az eseményben összegyűjtöm a form adatait
         4. elküldöm a controllernek
         */

    this.submitElem = this.formElem.find("#submit");
    this.szulEvElem = this.formElem.find("#szul_ev");
    this.nevElem = this.formElem.find("#nev");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.$inputElemObjektumokListaja.forEach((elem) => {
        console.log(elem.getValue());
        this.#formAdat[elem.key] = elem.getValue();
      });

      console.log(this.#formAdat);
      this.trigger("ujAdatHozzadasa");
    });
  }

  
  htmlOszeallit() {
    let txt = "";
    for (const key in adatLeiras) {
      switch (adatLeiras[key].tipus) {
        case "text":
          this.$inputElemObjektumokListaja.push(
            new textUrlapView(this.formElem, adatLeiras[key], key)
          );
          break;

        case "number":
          this.$inputElemObjektumokListaja.push(
            new numberUrlapView(this.formElem, adatLeiras[key], key)
          );
          break;
      }
    }
    txt += `<div class="mb-3 mt-3">
            <input type="submit"  
            id="submit" 
            value="Küld">
    </div>`;
    this.formElem.append(txt);
  }

  trigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this.#formAdat });
    window.dispatchEvent(esemenyem);
  }
}
