import { Component, OnInit } from '@angular/core';
import { menumenu } from '../menumenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menumenu = menumenu;
  constructor() { }

  ngOnInit() {
  }

}
