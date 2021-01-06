export default class PlayLogicRepeatButton {
    constructor() {
        this.section = document.querySelector(".section-container");
        this.btnStartGame = document.querySelector(".startGame");
    }

    onCreatebuttonRepeatGame() {
        this.buttonRepeatGame = document.createElement("button");
        this.buttonRepeatGame.className = "btn repeat-word";
    }

    onAppendbuttonRepeatGame() {
        this.section.append(this.buttonRepeatGame);
    }

    onInitButtonRepeatGame() {
        this.onCreatebuttonRepeatGame();
        this.onAppendbuttonRepeatGame();
    }

}