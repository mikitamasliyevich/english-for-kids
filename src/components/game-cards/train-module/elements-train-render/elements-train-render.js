import cards from "../../../../data/cards.js";


export default class ElementsTrainRender {
    constructor() {
        this.main = document.querySelector("main");
        this.secondBlock = document.createElement("section");
        this.secondBlock.className = "section-container";
        this.pageContainer = document.createElement("div");
        this.pageContainer.className = "page-container train";
        this.localStorageObject = JSON.parse(sessionStorage.getItem("statistic"));
    }

    onCreateContainer() {
        this.menuEveryBlock = document.createElement("div");
        this.menuEveryCard = document.createElement("div");
    }

    onCreateContainerClasses() {
        this.menuEveryCard.className = "card-container";
        this.menuEveryBlock.className = "flip-card";
    }

    onCreateFrontCard() {
        this.menuEveryfront = document.createElement("div");
        this.menuEveryfrontCardMain = document.createElement("div");
        this.menuEveryfrontCardMainImage = document.createElement("img");
        this.menuEveryfrontCardFooter = document.createElement("div");
        this.menuEveryfrontCardFooterWord = document.createElement("span");
        this.menuEveryfrontCardFooterBtnFlip = document.createElement("label");
        this.menuEveryfrontCardFooterBtnImage = document.createElement("img");
    }

    onCreateAudio(x, i) {
        this.audio = new Audio();
        this.menuEveryBlock.addEventListener("click", () => {
            this.audio.src = `src/data/${cards[x + 1][i].audioSrc}`;
            this.audio.play();
        });
    }

    oncreateClicks() {
        this.menuEveryBlock.addEventListener("click", () => {
            this.localStorageObject.forEach(e => {
                let currentCard = event.target;
                if (currentCard.alt === e.word) {
                    e.click += 1;
                }
            });
            sessionStorage.setItem("statistic", JSON.stringify(this.localStorageObject));
        });
    }

    onChangeClass() {
        const card = document.querySelectorAll(".flip-card");

        card.forEach(item => {
            item.lastChild.firstChild.lastChild.lastChild.addEventListener("click", () => {
                item.classList.add("is-flipped");
                if (item.className === "flip-card is-flipped") {
                    item.addEventListener("mouseleave", () => {
                        item.classList.remove("is-flipped");
                    });
                }
            });
        });
    }
    onCreateFrontCardClasses(x, i) {
        this.menuEveryfront.className = "card__face front";
        this.menuEveryfrontCardMain.className = "card-main";
        this.menuEveryfrontCardMainImage.className = "card-img";
        this.menuEveryfrontCardMainImage.src = `src/data/${cards[x + 1][i].image}`;
        this.menuEveryfrontCardMainImage.alt = `${cards[x + 1][i].word}`;
        this.menuEveryfrontCardFooter.className = "card-footer";
        this.menuEveryfrontCardFooterWord.className = "word";
        this.menuEveryfrontCardFooterWord.innerHTML = `${cards[x + 1][i].word}`;
        this.menuEveryfrontCardFooterBtnFlip.className = "btn-flip";
        this.menuEveryfrontCardFooterBtnImage.className = "flip-img";
        this.menuEveryfrontCardFooterBtnImage.src = "src/data/img/rotate.svg";
    }

    onCreateBackCard() {
        this.menuEveryBackCardFooter = document.createElement("div");
        this.menuEveryBackCardFooterCardMain = document.createElement("div");
        this.menuEveryBackCardMainImage = document.createElement("img");
        this.menuEveryBackFooterCardMainImage = document.createElement("div");
        this.menuEveryBackCardFooterWord = document.createElement("span");
    };

    onCreateBackCardClasses(x, i) {
        this.menuEveryBackCardFooter.className = "card__face back";
        this.menuEveryBackCardFooterCardMain.className = "card-main";
        this.menuEveryBackCardMainImage.className = "card-img";
        this.menuEveryBackCardMainImage.src = `src/data/${cards[x + 1][i].image}`;
        this.menuEveryBackFooterCardMainImage.className = "card-footer";
        this.menuEveryBackCardFooterWord.className = "word";
        this.menuEveryBackCardFooterWord.innerHTML = `${cards[x + 1][i].translation}`;
    }

    onAppendCreateContainer() {
        this.main.append(this.secondBlock);
        this.secondBlock.append(this.pageContainer);
        this.pageContainer.append(this.menuEveryBlock);
        this.menuEveryBlock.append(this.menuEveryCard);
    }

    onAppendFrontCard() {
        this.menuEveryCard.append(this.menuEveryfront);
        this.menuEveryfront.append(this.menuEveryfrontCardMain);
        this.menuEveryfrontCardMain.append(this.menuEveryfrontCardMainImage);
        this.menuEveryfront.append(this.menuEveryfrontCardFooter);
        this.menuEveryfrontCardFooter.append(this.menuEveryfrontCardFooterWord);
        this.menuEveryfrontCardFooter.append(this.menuEveryfrontCardFooterBtnFlip);
        this.menuEveryfrontCardFooterBtnFlip.append(this.menuEveryfrontCardFooterBtnImage);
    }

    onAppendBackCard() {
        this.menuEveryCard.append(this.menuEveryBackCardFooter);
        this.menuEveryBackCardFooter.append(this.menuEveryBackCardFooterCardMain);
        this.menuEveryBackCardFooterCardMain.append(this.menuEveryBackCardMainImage);
        this.menuEveryBackCardFooter.appendChild(this.menuEveryBackFooterCardMainImage);
        this.menuEveryBackFooterCardMainImage.appendChild(this.menuEveryBackCardFooterWord);
    }

    init(x, i) {
        this.onCreateContainer();
        this.onCreateContainerClasses();
        this.onCreateFrontCard();
        this.onCreateAudio(x, i);
        this.onCreateFrontCardClasses(x, i);
        this.onCreateBackCard();
        this.onCreateBackCardClasses(x, i);
        this.onAppendCreateContainer();
        this.onAppendFrontCard();
        this.onAppendBackCard();
        this.oncreateClicks();
        this.onChangeClass()
    }

}
