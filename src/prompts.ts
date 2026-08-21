import type { createPromptModule } from 'inquirer';

import type { Language, LanguagePack } from './types';

type Prompt = ReturnType<typeof createPromptModule<never>>;

const languageChoices = [
  { name: 'English (Default)', value: 'en' },
  { name: 'Português do Brasil', value: 'pt-BR' },
] as const;

export const promptForLanguage = async (
  prompt: Prompt,
  languages: Record<Language, LanguagePack>,
): Promise<LanguagePack> => {
  const { language } = await prompt<{ language: Language }>([
    {
      type: 'select',
      name: 'language',
      message: 'Hello, please select your preferred language:',
      choices: languageChoices,
    },
  ]);

  return languages[language];
};

export const promptForContactAction = async (
  prompt: Prompt,
  message: string,
  emailLabel: string,
  exitLabel: string,
): Promise<'email' | 'exit'> => {
  const { action } = await prompt<{ action: 'email' | 'exit' }>([
    {
      type: 'select',
      name: 'action',
      message,
      choices: [
        { name: emailLabel, value: 'email' },
        { name: exitLabel, value: 'exit' },
      ],
    },
  ]);

  return action;
};
