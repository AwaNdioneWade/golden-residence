import { Component } from '@angular/core';
import { Banniere } from "./banniere/banniere";
import { NosAtouts } from "./nos-atouts/nos-atouts";
import { NosChambres } from "./nos-chambres/nos-chambres";
import { QuiSommesNous } from "./qui-sommes-nous/qui-sommes-nous";
import { Temoignages } from "./temoignages/temoignages";
import { Galerie } from "./galerie/galerie";
import { Contact } from "./contact/contact";
import { Newsletter } from "./newsletter/newsletter";
import { Services } from "./services/services";

@Component({
  selector: 'app-home',
  imports: [Banniere, NosAtouts, NosChambres, Services, QuiSommesNous, Temoignages, Galerie, Contact, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
