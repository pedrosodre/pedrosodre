'use strict';

import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

import { langHandler } from './handlers/langHandler';
import DevHandler from './handlers/devHandler';
import { contactHandler } from './handlers/contactHandler';
import chalk from 'chalk';

const start = async () => {
    clear();
    const prompt = inquirer.createPromptModule();

    const langJson = await langHandler(prompt);

    const dev = new DevHandler(langJson).getDeveloper();
    console.log(dev.getCard());

    contactHandler(dev, prompt, chalk, open, langJson.words);

};

start();
