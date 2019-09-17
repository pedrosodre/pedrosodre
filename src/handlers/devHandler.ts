import Developer from '../entities/developer';
import boxen from 'boxen';
import chalk from 'chalk';

export default class DevHandler {

    langJson: any;
    developer: Developer;

    constructor(langJson: any) {
        this.langJson = langJson;
        this.developer = new Developer(boxen, chalk, this.langJson.me, this.langJson.words);
    }

    getDeveloper(): Developer {
        return this.developer;
    }

}