import cards from "../../../../data/cards";

export default class ElementsGameRender {
    constructor() {
        this.cardNumber = cards.length - 1;
        this.secondBlock = document.createElement("section");
        this.secondBlock.className = "section-container";
        this.main = document.querySelector("main");
        this.pageContainer = document.createElement("div");
        this.pageContainer.className = "pageContainer play";
        this.buttonStartGame = document.createElement("button")
        this.buttonStartGame.className = "startGame btn third";
        this.buttonStartGame.innerText = "Start game";
        this.progressBarContainer = document.createElement("div");
        this.progressBarContainer.className = "progress-bar-container";
    }

    onCreateContainer() {
        this.menuEveryBlock = document.createElement("div");
        this.menuEveryCard = document.createElement("div");
    }

    onCreateContainerClasses() {;
        this.menuEveryCard.className = "cardContainer";
        this.menuEveryBlock.className = "flipCard"
    }

    onCreateFrontCard() {
        this.menuEveryfrontCardMainImage = document.createElement("img");
        this.menuEveryfrontCardFooter = document.createElement("div");
    }

    onCreateFrontCardClasses(x, i) {
        this.menuEveryfrontCardMainImage.className = "cardImg";
        this.menuEveryfrontCardMainImage.src = `src/data/${cards[x + 1][i].image}`;
        this.menuEveryfrontCardMainImage.alt = `${cards[x + 1][i].word}`;
    }

    onAppendCreateContainer() {
        this.main.append(this.secondBlock);
        this.secondBlock.append(this.progressBarContainer);
        this.secondBlock.append(this.pageContainer);
        this.secondBlock.append(this.buttonStartGame);
        this.pageContainer.append(this.menuEveryBlock);
        this.menuEveryBlock.appendChild(this.menuEveryCard);
    }

    onAppendFrontCard() {
        this.menuEveryCard.append(this.menuEveryfrontCardMainImage);
    }

    onRenderElements(x, i) {
        this.onCreateContainer();
        this.onCreateContainerClasses();
        this.onCreateFrontCard();
        this.onCreateFrontCardClasses(x, i);
        this.onAppendCreateContainer();
        this.onAppendFrontCard();
    }

}
