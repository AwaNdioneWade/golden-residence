import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export type GalerieImage = { src: string; alt: string };

@Component({
  selector: 'app-galerie-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './galerie.html',
  styleUrl: './galerie.css',
})
export class GaleriePage {
  /** Mise en avant (même composition que la section Accueil) */
  readonly featured: readonly GalerieImage[] = [
    {
      src: 'assets/images/galerie/exterieur-piscine.png',
      alt: 'Vue extérieure avec piscine',
    },
    {
      src: 'assets/images/galerie/chambre-hotel.png',
      alt: "Chambre d'hôtel moderne",
    },
    {
      src: 'assets/images/galerie/salle-conference.png',
      alt: 'Salle de conférence',
    },
  ];

  /** Grille complémentaire (réutilise les visuels pour remplir la page) */
  readonly mosaic: readonly GalerieImage[] = [
    ...this.featured,
    this.featured[1],
    this.featured[0],
    this.featured[2],
  ];
}
