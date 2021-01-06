import cards from "../../../data/cards.js";
export default class MainPage {
    constructor() {
        this.main = document.querySelector("main");
        this.headerMainItem = document.querySelector(".main-page");
        this.menuCard = document.createElement("section");
        this.menuCard.className = "container main-container";
        this.cardNumber = 8;
        this.url = window.location.hash;
    }

    renderCards() {
        if (!this.url) {
            for (let i = 0; i < this.cardNumber; i += 1) {
                this.menuLink = document.createElement("a");
                this.menuLink.className = "main-card green";
                this.menuLink.setAttribute("href", `#cards${[i]}`);
                this.menuLink.hash = `cards${[i]}`;
                this.menuCardImage = document.createElement("img");
                this.menuCardImage.src = `src/data/${cards[i + 1][i].background}`;
                this.menuCardImage.innerHTML = `${cards[0][i]}`;
                this.menuCardText = document.createElement("nav");
                this.menuCardText.className = "headings"
                this.menuCardText.innerHTML = `${cards[0][i]}`;
                this.main.append(this.menuCard);
                this.menuCard.append(this.menuLink);
                this.menuLink.appendChild(this.menuCardImage);
                this.menuLink.appendChild(this.menuCardText);
                this.menuLink.addEventListener("click", () => {
                    history.pushState(null, null, "1");
                    this.menuCard.remove();
                })
            }
        }
    }

    init() {
        this.renderCards();
    }

}