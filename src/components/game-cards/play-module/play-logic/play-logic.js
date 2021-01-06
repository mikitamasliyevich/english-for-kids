import cards from "../../../../data/cards.js";
import SuccessFinishGameImage from "./success-finish-game-image.js";
import FailureFinishGameImage from "./failure-finish-game-image.js";
import PlayLogicElements from "./play-logic-repeat-button.js";
import PlayLogicProgressBar from "./play-logic-progress-bar.js";


export default class PlayLogic {
    constructor() {
        this.cardNumber = cards.length - 1;
        this.main = document.querySelector("main");
        this.section = document.querySelector(".section-container");
        this.url = window.location.hash;
        this.btnStartGame = document.querySelector(".startGame");
        this.cardImg = document.querySelectorAll(".cardImg");
        this.arrayOfSounds = [];
        this.audio = new Audio();
        this.error = new Audio();
        this.correct = new Audio();
        this.success = new Audio();
        this.failure = new Audio();
        this.countMistake = 0;
        this.numberWord = 0;
        this.successFinishGameImage = new SuccessFinishGameImage();
        this.failureFinishGameImage = new FailureFinishGameImage();
        this.playLogicElements = new PlayLogicElements();
        this.playLogicProgressBar = new PlayLogicProgressBar();
        this.averageValue = 0.5;
        this.keyName = "statistic";
        this.localStorageObject = JSON.parse(sessionStorage.getItem("statistic"));
    }

    appReload() {
        location.assign(``);
    }

    onLogicPlayClickButton() {
        for (let x = 0; x < this.cardNumber; x += 1) {
            if (this.url === `#cards${[x]}`) {
                for (let i = 0; i < this.cardNumber; i += 1) {
                    this.btnStartGame.addEventListener("click", () => {
                        this.playLogicProgressBar.onAppendprogressBar();
                        this.audio.src = `src/data/${cards[x + 1][i].audioSrc}`;
                        this.arrayOfSounds.push(`src/data/${cards[x + 1][i].audioSrc}`);
                        this.arrayOfSounds.sort(() => Math.random() - this.averageValue);
                        this.audio.src = this.arrayOfSounds[0];
                        this.audio.play();
                        this.btnStartGame.parentNode.removeChild(this.btnStartGame);
                        this.playLogicElements.onInitButtonRepeatGame();
                        this.buttonRepeatGame = document.querySelector(".repeat-word");
                        this.buttonRepeatGame.addEventListener("click", () => {
                            this.audio.play();
                        });
                    });
                }
            }
        }
    }

    onLogicChooseCards() {
        this.cardImg.forEach(item => {
            item.addEventListener("click", () => {
                this.currentCard = event.target;
                if (this.arrayOfSounds[0].includes(item.alt)) {
                    this.correct.src = "src/data/audio/correct.mp3";
                    this.correct.play();
                    this.arrayOfSounds.shift();
                    this.audio.src = this.arrayOfSounds[0];
                    this.audio.play();
                    this.numberWord += 1;
                    item.classList.add("picked");
                    this.playLogicProgressBar.onAppendprogressBarItemSuccess();
                    this.localStorageObject.forEach(e => {
                        if (this.currentCard.alt === e.word) {
                            e.correct += 1;
                        }
                        if (e.correct > 0 && e.wrong === 0) {
                            e.errors = 0;

                        } else if (e.correct === 0 && e.wrong > 0) {
                            e.errors = 100;
                        } else {
                            e.errors = Math.floor((e.wrong * 100) / (e.wrong + e.correct));
                        }
                        sessionStorage.setItem("statistic", JSON.stringify(this.localStorageObject));
                    });

                } else {
                    this.currentCards = event.target;
                    this.error.src = "src/data/audio/error.mp3";
                    this.error.play();
                    this.playLogicProgressBar.onAppendprogressBarItemBad();
                    this.countMistake += 1;
                    this.numberWord += 1;
                    this.localStorageObject.forEach(e => {
                        if (this.currentCard.alt === e.word) {
                            e.wrong += 1;
                            if (e.correct > 0 && e.wrong === 0) {
                                e.errors = 0;
                            } else if (e.correct === 0 && e.wrong > 0) {
                                e.errors = 100;
                            } else {
                                e.errors = Math.floor((e.wrong * 100) / (e.wrong + e.correct));
                            }
                        }
                        sessionStorage.setItem("statistic", JSON.stringify(this.localStorageObject));
                    });
                }

                if (this.arrayOfSounds.length === 0 && !this.countMistake) {
                    this.section.remove();
                    this.successFinishGameImage.init();
                    this.success.src = "src/data/audio/success.mp3";
                    this.success.play();
                    setTimeout(this.appReload, 3000);
                } else if (!this.arrayOfSounds.length) {
                    this.section.remove();
                    this.failureFinishGameImage.init();
                    this.finishScreenfailureMistakesQuality = document.querySelector(".mistakes");
                    this.finishScreenfailureMistakesQuality.textContent = this.countMistake;
                    this.failure.src = "src/data/audio/failure.mp3";
                    this.failure.play();
                    setTimeout(this.appReload, 3000);
                }
            });
        });
    }

    init() {
        this.onLogicPlayClickButton();
        this.onLogicChooseCards();
    }

}
