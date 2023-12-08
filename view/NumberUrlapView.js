export default class numberUrlapView {
    #value;
    constructor(szuloElem, obj, key) {
      this.szuloElem = szuloElem;
      this.obj = obj;
      this.key = key;
      this.numberUrlapElem();
      this.inputElem = this.szuloElem.find("#" + this.key);
      this.inputElem.on("change", (event) => {
        console.log(this.inputElem.val());
        //Itt fogunk validálni
        this.#value = this.inputElem.val();
      });
    }
  
    getValue() {
      return this.#value;
    }
  
    numberUrlapElem() {
        let txt = `<div class="mb-3 mt-3">
            <label for="${this.key}" class="form-label">${this.obj.megjelenes}:</label>
            <input type ="${this.obj.tipus}" 
            class="form-control" id="${this.key}" 
            placeholder="${this.obj.placeholder}"
             min="${this.obj.min}"
             max="${this.obj.max}"
             value="${this.obj.value}" name="${this.key}">
            </div>`;
    
            this.szuloElem.append(txt);
      }
  }
  