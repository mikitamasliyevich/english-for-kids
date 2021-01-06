import cards from "../../data/cards.js";

export default class StatisticLocalSrorage {
    constructor() {
        this.localArray = [];
    }

    getStatistic() {
        for (let i = 1; i < cards[0].length + 1; i += 1) {
            for (let x = 0; x < cards[i].length; x += 1) {
                this.localObj = {};
                this.localObj.categoty = cards[0][i - 1];
                this.localObj.word = cards[i][x].word;
                this.localObj.translation = cards[i][x].translation;
                this.localObj.audioSrc = cards[i][x].audioSrc;
                this.localObj.click = 0;
                this.localObj.correct = 0;
                this.localObj.wrong = 0;
                this.localObj.errors = 0;
                this.localArray.push(this.localObj);
            }
        }
        sessionStorage.setItem("statistic", JSON.stringify(this.localArray));
    }

    init() {
        this.getStatistic();
    }

}