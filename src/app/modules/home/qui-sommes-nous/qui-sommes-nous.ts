import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qui-sommes-nous',
  imports: [CommonModule],
  templateUrl: './qui-sommes-nous.html',
  styleUrl: './qui-sommes-nous.css',
})
export class QuiSommesNous {
  valeurs = [
    { label: 'Hospitalité' },
    { label: 'Confort' },
    { label: 'Modernité' },
    { label: 'Qualité' }
  ];
}
