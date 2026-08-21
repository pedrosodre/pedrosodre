import chalk from 'chalk';
import clear from 'clear';
import inquirer from 'inquirer';
import open from 'open';

import english from './lang/en.json';
import portuguese from './lang/pt-br.json';
import { renderProfileCard } from './profile-card';
import { promptForContactAction, promptForLanguage } from './prompts';
import type { Language, LanguagePack } from './types';

const languages = {
  en: english,
  'pt-BR': portuguese,
} satisfies Record<Language, LanguagePack>;

const isPromptExit = (error: unknown): boolean =>
  error instanceof Error && error.name === 'ExitPromptError';

const main = async (): Promise<void> => {
  clear();
  const prompt = inquirer.createPromptModule();
  const languagePack = await promptForLanguage(prompt, languages);
  const { me: profile, words: copy } = languagePack;

  console.log(renderProfileCard(profile, copy));
  console.log(
    `\n${copy.tip.replace('[[command]]', chalk.cyanBright.bold(copy.command))}\n`,
  );

  const action = await promptForContactAction(
    prompt,
    copy.whatDoYouWant,
    `${copy.sendMail} ${chalk.green.bold('email')}!`,
    copy.quit,
  );

  if (action === 'email') {
    await open(`mailto:${profile.email}`);
    console.log(`\n${copy.sendMailDone}\n`);
    return;
  }

  console.log(`${copy.bye}\n`);
};

void main().catch((error: unknown) => {
  if (isPromptExit(error)) {
    return;
  }

  console.error(error);
  process.exitCode = 1;
});
