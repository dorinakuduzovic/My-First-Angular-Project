import { Time } from '@angular/common';
import { EmailValidator } from '@angular/forms';

export class ReservationForm {
    constructor(
        public name: string,
        public phoneNumber: number,
        public mail: EmailValidator,
        public date: Date,
        public time: Time,
        public seats: string,

    ) {

    }
}
