import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { OnlineComponent } from './online/online.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MapComponent } from './map/map.component';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    AboutusComponent,
    MenuComponent,
    OnlineComponent,
    GalleryComponent,
    FooterComponent,
    AboutUsPageComponent,
    MenuPageComponent,
    ReservationPageComponent,
    GalleryPageComponent,
    ContactComponent,
    NotfoundComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
