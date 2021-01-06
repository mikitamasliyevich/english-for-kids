export default class SuccessFinishGameImage {
    constructor() {
        this.main = document.querySelector("main");
        this.finishScreenSuccess = document.createElement("div");
        this.finishScreenSuccess.className = "finish finishScreenSuccess";
        this.finishScreenSuccessText = document.createElement("p");
        this.finishScreenSuccessText.innerText = "You win";
        this.finishScreenSuccessText.className = "final-result"
        this.finishScreenSuccessImg = document.createElement("img");
        this.finishScreenSuccessImg.src = "src/data/img/success.png";

    }

    init() {
        this.main.append(this.finishScreenSuccess);
        this.finishScreenSuccess.append(this.finishScreenSuccessText);
        this.finishScreenSuccess.append(this.finishScreenSuccessImg);
    }

}
