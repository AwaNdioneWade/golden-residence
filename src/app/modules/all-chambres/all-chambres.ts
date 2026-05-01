import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardChambre } from '../../shared/card-chambre/card-chambre';
import { CHAMBRES_LIST } from '../../shared/data/chambres';

@Component({
  selector: 'app-all-chambres',
  imports: [CommonModule, RouterLink, CardChambre],
  templateUrl: './all-chambres.html',
  styleUrl: './all-chambres.css',
})
export class AllChambres {
  readonly chambres = CHAMBRES_LIST;
}
