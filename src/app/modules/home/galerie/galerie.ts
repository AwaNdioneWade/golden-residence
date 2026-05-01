import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galerie',
  imports: [CommonModule],
  templateUrl: './galerie.html',
  styleUrl: './galerie.css',
})
export class Galerie {
  images = [
    {
      src: 'assets/images/galerie/exterieur-piscine.png',
      alt: 'Vue extérieure avec piscine',
      large: true
    },
    {
      src: 'assets/images/galerie/chambre-hotel.png',
      alt: 'Chambre d\'hôtel moderne',
      large: false
    },
    {
      src: 'assets/images/galerie/salle-conference.png',
      alt: 'Salle de conférence',
      large: false
    }
  ];
}
