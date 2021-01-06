export default class PlayLogicProgressBar {
    constructor() {
        this.progressBarContainer = document.querySelector(".progress-bar-container");
        this.progressBar = document.createElement("div");
        this.progressBar.className = "progress-bar"
        this.progressBarItemBad = document.createElement("div")
        this.progressBarItemBad.className = "progressBarItem progressBarBad";
        this.progressBarBadImage = document.createElement("img");
        this.progressBarBadImage.src = "src/data/img/smile-bad.svg"
        this.progressBarItemSuccess = document.createElement("div");
        this.progressBarItemSuccess.className = "progressBarItem progressBarSuccess";
        this.progressBarItemSuccessImage = document.createElement("img");
        this.progressBarItemSuccessImage.src = "src/data/img/smile-good.svg";

    };

    onAppendprogressBar() {
        this.progressBarContainer.append(this.progressBar)
    }

    onAppendprogressBarItemSuccess() {
        this.progressBar.appendChild(this.progressBarItemSuccess)
        const successSmile = this.progressBarItemSuccessImage.cloneNode(true)
        this.progressBarItemSuccess.appendChild(successSmile)
    }

    onAppendprogressBarItemBad() {
        this.progressBar.appendChild(this.progressBarItemBad);
        const badSmile = this.progressBarBadImage.cloneNode(true);
        this.progressBarItemBad.appendChild(badSmile)
    }
    init() {}
}
