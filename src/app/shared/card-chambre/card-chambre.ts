import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChambreCard } from '../data/chambres';

@Component({
  selector: 'app-card-chambre',
  imports: [CommonModule, RouterLink],
  templateUrl: './card-chambre.html',
  styleUrl: './card-chambre.css',
})
export class CardChambre {
  @Input() chambre: ChambreCard = {
    slug: '',
    image: '',
    title: '',
    description: '',
    features: [],
  };
}
