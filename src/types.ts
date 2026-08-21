export type Language = 'en' | 'pt-BR';

export interface Profile {
  name: string;
  username: string;
  email: string;
  role: string;
  roleAt: string;
  roleColor: string;
  github: string;
  linkedin: string;
  npm: string;
  website: string;
  sentenceOne: string;
}

export interface Copy {
  at: string;
  work: string;
  whatDoYouWant: string;
  sendMail: string;
  sendMailDone: string;
  quit: string;
  bye: string;
  command: string;
  tip: string;
}

export interface LanguagePack {
  me: Profile;
  words: Copy;
}
