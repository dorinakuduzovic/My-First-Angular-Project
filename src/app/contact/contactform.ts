import { EmailValidator } from '@angular/forms';



export class ContactForm {
    constructor(
        public name: string,
        public mail: EmailValidator,
        public subject: string,
        public message: string

    ) {

    }
}
