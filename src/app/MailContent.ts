export class MailContent {
    constructor() { };
    name: string;
    email: string;
    title: string;
    content: string;
    edit(data) {
        this.name = data.name;
        this.email = data.email;
        this.title = data.title;
        this.content = data.text;

    }
}