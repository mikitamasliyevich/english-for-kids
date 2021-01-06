export default class FailureFinishGameImage {
    constructor() {
        this.main = document.querySelector("main");
        this.finishScreenfailure = document.createElement("div");
        this.finishScreenfailure.className = "finish finishFailure";
        this.finishScreenfailureMistakes = document.createElement("p");
        this.finishScreenfailureMistakes.innerText = "You made mistakes:";
        this.finishScreenfailureMistakes.className = "final-result"
        this.finishScreenfailureMistakesQuality = document.createElement("span");
        this.finishScreenfailureMistakesQuality.className = "mistakes";
        this.finishScreenfailureImage = document.createElement("img");
        this.finishScreenfailureImage.src = "src/data/img/failure.png";
    }

    init() {
        this.main.append(this.finishScreenfailure);
        this.finishScreenfailure.append(this.finishScreenfailureMistakes);
        this.finishScreenfailureMistakes.appendChild(this.finishScreenfailureMistakesQuality);
        this.finishScreenfailure.append(this.finishScreenfailureImage);
    }

}
