import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ServiceIcon = 'shield' | 'wifi' | 'parking' | 'clean';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services: Array<{
    icon: ServiceIcon;
    title: string;
    description: string;
    cardClass: string;
  }> = [
    {
      icon: 'shield',
      title: 'Sécurité 24h/24',
      description: 'Tranquillité garantie.',
      cardClass: 'services-card--1',
    },
    {
      icon: 'wifi',
      title: 'WiFi Haut Débit',
      description: 'Restez connecté partout.',
      cardClass: 'services-card--2',
    },
    {
      icon: 'parking',
      title: 'Parking Privé',
      description: 'Espace sécurisé.',
      cardClass: 'services-card--3',
    },
    {
      icon: 'clean',
      title: "Service d'entretien",
      description: 'Propreté irréprochable.',
      cardClass: 'services-card--4',
    },
  ];
}
