import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'online', component: OnlineComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about-us-page', component: AboutUsPageComponent },
  { path: 'menu-page', component: MenuPageComponent },
  { path: 'reservation-page', component: ReservationPageComponent },
  { path: 'gallery-page', component: GalleryPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent },
  { path: 'map', component: MapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
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
  MapComponent
];

