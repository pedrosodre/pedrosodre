import boxen from 'boxen';
import chalk from 'chalk';

import type { Copy, Profile } from './types';

const wrapText = (text: string, lineLength = 50): string =>
  text
    .replace(new RegExp(`(.{1,${lineLength}})(?:\\s+|$)`, 'g'), '$1\n')
    .trim();

export const renderProfileCard = (profile: Profile, copy: Copy): string => {
  const details = [
    ['Website:', profile.website],
    ['GitHub:', profile.github],
    ['npm:', profile.npm],
    ['LinkedIn:', profile.linkedin],
  ] as const;

  const content = [
    chalk.bold.green(profile.name),
    '',
    `${chalk.white.bold(copy.work)} ${chalk.white(profile.role)} ${chalk.white(copy.at)} ${chalk.hex(profile.roleColor).bold(profile.roleAt)}`,
    ...details.map(
      ([label, value]) => `${chalk.white.bold(label.padEnd(12))}${value}`,
    ),
    '',
    `${chalk.white.bold('Card:'.padEnd(12))}${chalk.red('npx')} ${chalk.white(profile.username)}`,
    '',
    chalk.italic(wrapText(profile.sentenceOne)),
  ].join('\n');

  return boxen(content, {
    borderColor: 'blue',
    float: 'center',
    margin: 1,
    padding: 1,
  });
};
