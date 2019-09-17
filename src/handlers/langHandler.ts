import inquirer from 'inquirer';

import pt_br from '../lang/pt-br.json';
import en from '../lang/en.json';

export const langHandler = async (prompt: inquirer.PromptModule) => {
    let jsonLang: any;

    const questions = [
        {
            type: 'list',
            name: 'action',
            message: 'Hello, please select your preferred language:',
            choices: [
                {
                    name: `English (Default)`,
                    value: () => {
                        jsonLang = langPicker('en');
                    }
                },
                {
                    name: 'Português do Brasil',
                    value: () => {
                        jsonLang = langPicker('pt_br');
                    }
                }
            ]
        }
    ];

    await prompt(questions).then((answer: any) => { answer.action(); });
    return jsonLang;
};

const langPicker = (language: string) => {
    return language === 'pt_br' ? pt_br : en;
};