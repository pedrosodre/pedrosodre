import IDeveloper from '../interfaces/developer';

export default class Developer implements IDeveloper {
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
    blog: string;

    sentenceOne: string;
    sentenceTwo: string;

    words: any;

    box: any;
    chalk: any;

    constructor(box: any, chalk: any, dev: { name: string, username: string, email: string, role: string, roleAt: string, roleColor: string, github?: string, linkedin?: string, npm?: string, website?: string, blog?: string, sentenceOne?: string, sentenceTwo?: string }, words: {}) {
        this.name = dev.name;
        this.username = dev.username;
        this.email = dev.email;
        this.role = dev.role;
        this.roleAt = dev.roleAt;
        this.roleColor = dev.roleColor;

        this.github = dev.github ? dev.github : '';
        this.linkedin = dev.linkedin ? dev.linkedin : '';
        this.npm = dev.npm ? dev.npm : '';
        this.website = dev.website ? dev.website : '';
        this.blog = dev.blog ? dev.blog : '';

        this.sentenceOne = dev.sentenceOne ? dev.sentenceOne : '';
        this.sentenceTwo = dev.sentenceTwo ? dev.sentenceTwo : '';

        this.words = words;

        this.box = box;
        this.chalk = chalk;
    }

    getCard() {
        return this.box(
            [
                `${this.chalk.bold.green(this.name)}`,
                ``,
                `${this.chalk.white.bold(this.words.work)}  ${this.chalk.white(this.role)} ${this.chalk.white(this.words.at)} ${this.chalk.hex(this.roleColor).bold(this.roleAt)}`,
                `${this.chalk.white.bold('Website:')}   ${this.website}`,
                `${this.chalk.white.bold('Blog:')}      ${this.blog}`,
                `${this.chalk.white.bold('GitHub:')}    ${this.github}`,
                `${this.chalk.white.bold('npm:')}       ${this.npm}`,
                `${this.chalk.white.bold('LinkedIn:')}  ${this.linkedin}`,
                ``,
                `${this.chalk.white.bold('Card:')}      ${this.chalk.red('npx') + ' ' + this.chalk.white(this.username)}`,
                ``,
                `${this.chalk.italic(this.sentenceOne)}`,
                `${this.chalk.italic(this.sentenceTwo)}`
            ].join('\n'),
            {
                margin: 1,
                float: 'center',
                padding: 1,
                borderColor: 'blue'
            }
        );
    }

}