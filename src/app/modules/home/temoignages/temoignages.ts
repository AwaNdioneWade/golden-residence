import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temoignages',
  imports: [CommonModule],
  templateUrl: './temoignages.html',
  styleUrl: './temoignages.css',
})
export class Temoignages {
  temoignages = [
    {
      photo: 'assets/images/temoignages/guy-hawkins.jpg',
      nom: 'Guy Hawkins',
      date: '25.11.2025',
      texte: 'Lorem ipsum dolor sit amet consectetur. Magna dignissim tortor commodo fringilla.'
    },
    {
      photo: 'assets/images/temoignages/leslie-alexander.jpg',
      nom: 'Leslie Alexander',
      date: '25.11.2025',
      texte: 'Lorem ipsum dolor sit amet consectetur. Mi nunc sed nisl pulvinar odio felis id. Ipsum.'
    },
    {
      photo: 'assets/images/temoignages/jerome-bell.jpg',
      nom: 'Jerome Bell',
      date: '25.11.2025',
      texte: 'Lorem ipsum dolor sit amet consectetur. Nunc felis vitae amet pharetra imperdiet.'
    }
  ];
}
