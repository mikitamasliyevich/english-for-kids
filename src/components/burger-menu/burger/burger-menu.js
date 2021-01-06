import cards from "../../../data/cards.js";

export default class BurgerMenu {
    constructor() {
        this.menuToggle = document.querySelector(".menuToggle");
        this.menu = document.createElement("ul");
        this.menu.className = "menu";
        this.cardNumber = 8;
        this.url = window.location.hash;
        this.headerMainItem = document.createElement("a");
        this.headerMainItem.className = "main-page";
        this.headerMainItem.innerHTML = "Main Page";
        this.headerMainItem.setAttribute("href", ``);
        this.headerMainItem.hash = ``;
        this.menu.append(this.headerMainItem);
        this.statistics = document.createElement("a");
        this.statistics.className = "statistic";
        this.statistics.innerHTML = "Statistics";
        this.statistics.setAttribute("href", `#statistic`);
        this.statistics.hash = `#statistic`;
        this.currentPage = "Main Page";
    }

    burgerMenu() {
        for (let i = 0; i < this.cardNumber; i += 1) {
            this.headerItem = document.createElement("a");
            this.headerItem.className = "header-item";
            this.headerItem.setAttribute("href", `#cards${[i]}`);
            this.headerItem.hash = `cards${[i]}`;
            this.headerItem.innerHTML = `${cards[0][i]}`;
            this.menuToggle.append(this.menu);
            this.menu.appendChild(this.headerItem);
            this.menu.append(this.statistics);
        };
        this.menuToggle.addEventListener("click", () => {
            history.pushState(null, null, "hash");
        });
    }

    init() {
        this.burgerMenu();
    }

}
