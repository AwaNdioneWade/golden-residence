import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-nos-atouts',
  imports: [CommonModule],
  templateUrl: './nos-atouts.html',
  styleUrl: './nos-atouts.css',
})
export class NosAtouts {
  atouts: Array<{ icon: SafeHtml; title: string; description: string }> = [];

  constructor(private sanitizer: DomSanitizer) {
    const iconStrings = [
      '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="30" fill="#E4CC7F"/><path d="M39.4999 22.9167H28.1666V32.8334H16.8332V20.0834H13.9999V41.3334H16.8332V37.0834H42.3332V41.3334H45.1666V28.5834C45.1666 27.0805 44.5696 25.6391 43.5068 24.5764C42.4441 23.5137 41.0028 22.9167 39.4999 22.9167ZM22.4999 31.4167C23.6271 31.4167 24.7081 30.9689 25.5051 30.1719C26.3021 29.3749 26.7499 28.2939 26.7499 27.1667C26.7499 26.0395 26.3021 24.9585 25.5051 24.1615C24.7081 23.3645 23.6271 22.9167 22.4999 22.9167C21.3727 22.9167 20.2917 23.3645 19.4947 24.1615C18.6977 24.9585 18.2499 26.0395 18.2499 27.1667C18.2499 28.2939 18.6977 29.3749 19.4947 30.1719C20.2917 30.9689 21.3727 31.4167 22.4999 31.4167Z" fill="#D4AF36"/></svg>',
      '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="30" fill="#E4CC7F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.426 21.1855C20.7543 19.8576 22.5557 19.1116 24.4339 19.1116C26.3122 19.1116 28.1135 19.8576 29.4419 21.1855C29.7016 21.4443 30.0359 21.7663 30.4449 22.1516C30.8529 21.7663 31.1867 21.4443 31.4464 21.1855C32.7692 19.8689 34.5581 19.1276 36.4244 19.1226C38.2906 19.1176 40.0835 19.8493 41.4132 21.1588C42.743 22.4682 43.5023 24.2496 43.5261 26.1157C43.5499 27.9818 42.8362 29.7819 41.5402 31.1248L31.445 41.22C31.1794 41.4856 30.8191 41.6348 30.4434 41.6348C30.0678 41.6348 29.7075 41.4856 29.4419 41.22L19.3467 31.1262C18.0519 29.7909 17.3343 27.9998 17.3489 26.1399C17.3635 24.2799 18.1105 22.5004 19.426 21.1855Z" fill="#D4AF36"/></svg>',
      '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="30" fill="#E4CC7F"/><path d="M25.3959 27.1667C25.3959 25.9456 25.881 24.7745 26.7444 23.911C27.6079 23.0476 28.7789 22.5625 30 22.5625C31.2211 22.5625 32.3922 23.0476 33.2557 23.911C34.1191 24.7745 34.6042 25.9456 34.6042 27.1667C34.6042 28.3878 34.1191 29.5589 33.2557 30.4223C32.3922 31.2858 31.2211 31.7708 30 31.7708C28.7789 31.7708 27.6079 31.2858 26.7444 30.4223C25.881 29.5589 25.3959 28.3878 25.3959 27.1667Z" fill="#D4AF36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3465 25.5757C18.5822 22.7279 19.8797 20.0727 21.9817 18.1368C24.0836 16.201 26.8365 15.1259 29.694 15.125H30.306C33.1636 15.1259 35.9165 16.201 38.0184 18.1368C40.1204 20.0727 41.4179 22.7279 41.6535 25.5757C41.915 28.7553 40.9334 31.9124 38.9151 34.3832L32.125 42.6877C31.8677 43.0027 31.5435 43.2565 31.176 43.4308C30.8085 43.6051 30.4068 43.6956 30 43.6956C29.5933 43.6956 29.1916 43.6051 28.8241 43.4308C28.4566 43.2565 28.1324 43.0027 27.875 42.6877L21.0864 34.3832C19.0676 31.9126 18.0854 28.7555 18.3465 25.5757ZM30 20.4375C28.2154 20.4375 26.5038 21.1465 25.2418 22.4084C23.9798 23.6704 23.2709 25.382 23.2709 27.1667C23.2709 28.9514 23.9798 30.6629 25.2418 31.9249C26.5038 33.1869 28.2154 33.8958 30 33.8958C31.7847 33.8958 33.4963 33.1869 34.7583 31.9249C36.0202 30.6629 36.7292 28.9514 36.7292 27.1667C36.7292 25.382 36.0202 23.6704 34.7583 22.4084C33.4963 21.1465 31.7847 20.4375 30 20.4375Z" fill="#D4AF36"/></svg>'
    ];

    this.atouts = [
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(iconStrings[0]),
        title: 'Confort & Modernité',
        description: 'Des chambres aménagées avec soin, mobilier contemporain et équipements adaptés.'
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(iconStrings[1]),
        title: 'Cadre Chaleureux',
        description: 'Un espace pensé pour vous offrir une expérience reposante et mémorable.'
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(iconStrings[2]),
        title: 'Localisation Stratégique',
        description: 'Au cœur de Thiès, proche des grands axes et commerces.'
      }
    ];
  }
}
