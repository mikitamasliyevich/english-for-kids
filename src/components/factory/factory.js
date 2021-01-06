import MainPage from "../head-page/main-page/main-page.js";
import TrainPlayModules from "../game-cards/train-play-modules/train-play-modules.js";
import BurgerMenu from "../burger-menu/burger/burger-menu.js";
import Statistic from "../statistics/statistic.js";
import StatisticLocalSrorage from "../statistics/statistic-logic.js"

export default class Factory {
    constructor() {
        this.mainPage = new MainPage();
        this.trainPlayModules = new TrainPlayModules();
        this.burgerMenu = new BurgerMenu();
        this.statistic = new Statistic();
        this.statisticLocalSrorage = new StatisticLocalSrorage();
    }

    init() {
        this.statisticLocalSrorage.init()
        this.mainPage.init();
        this.trainPlayModules.init();
        this.burgerMenu.init();
        this.statistic.init()
    }

}