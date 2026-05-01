import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { AllChambres } from './modules/all-chambres/all-chambres';
import { ReservationSejour } from './modules/reservation-sejour/reservation-sejour';
import { GaleriePage } from './modules/galerie/galerie';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reservations', component: AllChambres },
  { path: 'galerie', component: GaleriePage },
  { path: 'reservation', component: ReservationSejour },
  { path: 'reservation/:chambreSlug', component: ReservationSejour },
];
