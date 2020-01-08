import { Component, OnInit } from '@angular/core';
import { ReservationForm } from './reservationform'
@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {
  seats = [
    '1 Person', '2 Persons', '3 Persons', '4 Persons', '5 Persons', '6 Persons'
  ];
  constructor() { }

  ngOnInit() {
  }

}
