import type { createPromptModule } from 'inquirer';
import Developer from '../interfaces/developer';

type PromptModule = ReturnType<typeof createPromptModule<never>>;

export const contactHandler = async (dev: Developer, prompt: PromptModule, chalk: any, open: any, words: any) => {

    const questions = [
        {
            type: 'select',
            name: 'action',
            message: words.whatDoYouWant,
            choices: [
                {
                    name: `${words.sendMail} ${chalk.green.bold('email')}!`,
                    value: () => {
                        open(`mailto:${dev.email}`);
                        console.log(`\n${words.sendMailDone}\n`);
                    }
                },
                {
                    name: words.quit,
                    value: () => {
                        console.log(`${words.bye}\n`);
                    }
                }
            ]
        }
    ];

    const command = chalk.cyanBright.bold(words.command);
    const tip = words.tip.replace('[[command]]', command);
    console.log(`${tip}\n`);

    prompt(questions).then((answer: any) => { answer.action(); });

};
