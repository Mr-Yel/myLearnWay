import { eventBus } from "./fabudingyue.js";

class Publisher {
  constructor() {
    this.lowPrice();
  }

  lowPrice() {
    eventBus.emit("ready", 100);
  }
}

class Subscriber {
  constructor() {}
  getLowPrice() {
    eventBus.on("ready", (data) => {
      console.log("ready", data);
    });
  }
}

const a1 = new Subscriber();

const a2 = new Publisher();
