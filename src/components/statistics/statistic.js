import cards from "../../data/cards.js";

export default class Statistic {
    constructor() {
        this.main = document.querySelector("main");
        this.cardNumber = cards.length - 1;
        this.blocks = 64;
        this.url = window.location.hash;
        this.localStorageObject = JSON.parse(sessionStorage.getItem("statistic"));
    }

    onCreateStatistic() {
        this.wrapperStatistic = document.createElement("div");
        this.wrapperStatistic.className = "wrapper";
        this.statistics = document.createElement("div");
        this.statistics.className = "statistics";
    }

    onCreateButtons() {
        this.statisticsButtons = document.createElement("div");
        this.statisticsButtons.className = "statisticsButtons";
        this.resetWordsButton = document.createElement("button");
        this.resetWordsButton.className = "statistics-button";
        this.resetWordsButton.innerText = "Reset";
    }

    onCreateTable() {
        this.statisticsTable = document.createElement("table");
        this.statisticsTable.className = "table";
        this.statisticsTableName = document.createElement("caption");
        this.statisticsTableName.className = "table-name";
        this.statisticsTableName.innerText = "Cards";
        this.statisticsThead = document.createElement("thead");
        this.statisticsTbody = document.createElement("tbody");
        this.statisticsTbody.className = "table-body";
    }

    onCreateTableBlockNames() {
        this.statisticsBlockNameCategory = document.createElement("th");
        this.statisticsBlockNameCategory.className = "table-sortable";
        this.statisticsBlockNameCategory.scope = "col";
        this.statisticsBlockNameCategory.innerText = "Category";
        this.statisticsBlockNameWord = document.createElement("th");
        this.statisticsBlockNameWord.className = "table-sortable";
        this.statisticsBlockNameWord.scope = "col";
        this.statisticsBlockNameWord.innerText = "Word";
        this.statisticsBlockNameTranslation = document.createElement("th");
        this.statisticsBlockNameTranslation.className = "table-sortable";
        this.statisticsBlockNameTranslation.scope = "col";
        this.statisticsBlockNameTranslation.innerText = "Translation";
        this.statisticsBlockNameTrainClicks = document.createElement("th");
        this.statisticsBlockNameTrainClicks.className = "table-sortable";
        this.statisticsBlockNameTrainClicks.scope = "col";
        this.statisticsBlockNameTrainClicks.innerText = "Clicks ";
        this.statisticsBlockNameCorrect = document.createElement("th");
        this.statisticsBlockNameCorrect.className = "table-sortable";
        this.statisticsBlockNameCorrect.scope = "col";
        this.statisticsBlockNameCorrect.innerText = "Correct";
        this.statisticsBlockNameWrong = document.createElement("th");
        this.statisticsBlockNameWrong.className = "table-sortable";
        this.statisticsBlockNameWrong.scope = "col";
        this.statisticsBlockNameWrong.innerText = "Wrong";
        this.statisticsBlockNameErrors = document.createElement("th");
        this.statisticsBlockNameErrors.className = "table-sortable";
        this.statisticsBlockNameErrors.scope = "col";
        this.statisticsBlockNameErrors.innerText = "% errors";
    }

    onCreateTableBody() {
        for (let i = 0; i < this.localStorageObject.length; i += 1) {
            this.tr = document.createElement("tr");
            this.statisticsTbody.append(this.tr);
            for (let x = 0; x < Object.keys(this.localStorageObject[i]).length; x += 1) {
                this.td = document.createElement("td");
                switch (x) {
                    case 0:
                        this.td.innerText = this.localStorageObject[i].categoty;
                        this.tr.append(this.td);
                        break;
                    case 1:
                        this.td.innerText = this.localStorageObject[i].word;
                        this.tr.append(this.td);
                        break;
                    case 2:
                        this.td.innerText = this.localStorageObject[i].translation;
                        this.tr.append(this.td);
                        break;
                    case 3:
                        this.td.innerText = this.localStorageObject[i].click;
                        this.tr.append(this.td);
                        break;
                    case 4:
                        this.td.innerText = this.localStorageObject[i].correct;
                        this.tr.append(this.td);
                        break;
                    case 5:
                        this.td.innerText = this.localStorageObject[i].wrong;
                        this.tr.append(this.td);
                        break;
                    case 6:
                        this.td.innerText = this.localStorageObject[i].errors;
                        this.tr.append(this.td);
                        break;
                    default:
                }
            }
        }
    }

    onResetTableBody() {
        this.localStorageObject.forEach(element => {
            element.categoty = 0;
        });
    }

    onAppendStatistic() {
        this.main.append(this.wrapperStatistic);
        this.wrapperStatistic.append(this.statistics);
    }

    onAppendButtons() {
        this.statistics.append(this.statisticsButtons);

        this.statisticsButtons.appendChild(this.resetWordsButton);
    }

    onAppendTable() {
        this.statistics.append(this.statisticsTable);
        this.statisticsTable.append(this.statisticsTableName);
        this.statisticsTable.append(this.statisticsThead);
        this.statisticsTable.append(this.statisticsTbody);
    }

    onAppendTableBlockNames() {
        this.statisticsThead.appendChild(this.statisticsBlockNameCategory);
        this.statisticsThead.appendChild(this.statisticsBlockNameWord);
        this.statisticsThead.appendChild(this.statisticsBlockNameTranslation);
        this.statisticsThead.appendChild(this.statisticsBlockNameTrainClicks);
        this.statisticsThead.appendChild(this.statisticsBlockNameCorrect);
        this.statisticsThead.appendChild(this.statisticsBlockNameWrong);
        this.statisticsThead.appendChild(this.statisticsBlockNameErrors);
    }

    init() {
        if (this.url === `#statistic`) {
            this.onCreateStatistic();
            this.onCreateButtons();
            this.onCreateTable();
            this.onCreateTableBody();
            this.onAppendStatistic();
            this.onAppendButtons();
            this.onAppendTable();
            this.onCreateTableBlockNames();
            this.onAppendTableBlockNames();
            this.onResetTableBody();

            this.wrapperStatistic.addEventListener("click", () => {
                history.pushState(null, null, "#statistic");
            });

            document.querySelector(".statistics-button").addEventListener("click", () => {
                window.location.reload();
            });
        }
    }

}