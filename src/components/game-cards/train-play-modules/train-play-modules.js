import cards from "../../../data/cards.js";
import ElementsTrainRender from "../train-module/elements-train-render/elements-train-render.js";
import ElementsGameRender from "../play-module/elements-game-render/elements-game-render.js";
import PlayLogic from "../play-module/play-logic/play-logic.js";

export default class TrainPlayModules {
    constructor() {
        this.cardNumber = cards.length - 1;
        this.url = window.location.hash;
        this.switcher = document.querySelector(".switch-input");
        this.elementsTrainRender = new ElementsTrainRender();
        this.elementsGameRender = new ElementsGameRender();
    }

    renderEveryCards() {
        for (let x = 0; x < this.cardNumber; x += 1) {
            if (this.url === `#cards${[x]}`) {
                for (let i = 0; i < this.cardNumber; i += 1) {
                    if (this.switcher.checked) {
                        this.elementsTrainRender.init(x, i);
                    } else if (!this.switcher.checked) {
                        this.elementsGameRender.onRenderElements(x, i);
                    }
                }
            }
        }
    }

    changeSwicher() {
        this.switcher.addEventListener("click", () => {
            this.sectionContainer = document.querySelector(".section-container");
            this.flipCard = document.querySelectorAll(".flip-card");
            this.flipCards1 = document.querySelectorAll(".flipCard");
            this.flipCard ? this.flipCard.forEach(item => item.remove()) : console.log("a");
            this.flipCards1 ? this.flipCards1.forEach(item => item.remove()) : console.log("b");
            this.sectionContainer.remove();
            if (this.switcher.checked) {
                this.switcher.setAttribute("checked", false);
                this.renderEveryCards();
            } else {
                this.switcher.setAttribute("checked", true);
                this.renderEveryCards();
            }
            this.playLogic = new PlayLogic();
            this.playLogic.init();
        });
    }

    init() {
        this.renderEveryCards();
        this.changeSwicher();
    }

}
