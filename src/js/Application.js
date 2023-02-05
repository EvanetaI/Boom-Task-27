import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  divElement;
  paragraph;
  newArray;
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emit(Application.events.READY);
    this.divElement = document.getElementById("emojis")
    this.divElement.innerHTML = ""

    this.paragraph = document.createElement("p")

    this.emojis = [];
    this.banana = "🍌";
  }

  setEmojis(emojis) {
    this.emojis = emojis;
  }
  
  addBananas() {
    this.newArray = this.emojis.map(el=>el+this.banana)
    this.paragraph.textContent = this.newArray
    this.divElement.appendChild(this.paragraph)
  }
}
