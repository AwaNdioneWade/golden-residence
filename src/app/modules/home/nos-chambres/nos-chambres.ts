import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChambre } from '../../../shared/card-chambre/card-chambre';
import { CHAMBRES_LIST } from '../../../shared/data/chambres';

@Component({
  selector: 'app-nos-chambres',
  imports: [CommonModule, CardChambre],
  templateUrl: './nos-chambres.html',
  styleUrl: './nos-chambres.css',
})
export class NosChambres {
  readonly chambres = CHAMBRES_LIST;
}
