import { Component, OnInit } from '@angular/core';
import { galleryphotos } from './galleryphotos';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',

})
export class GalleryComponent implements OnInit {
  galleryphotos = galleryphotos;
  constructor() { }

  ngOnInit() {


  }

}