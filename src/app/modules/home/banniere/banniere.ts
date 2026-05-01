import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banniere',
  imports: [CommonModule],
  templateUrl: './banniere.html',
  styleUrl: './banniere.css',
})
export class Banniere implements OnInit, OnDestroy {
  currentSlide = 0;
  private intervalId: any;
  
  slides = [
    {
      image: 'assets/images/banniere/bann1.png',
      title: 'Le confort moderne',
      subtitle: 'au cœur de Thiès',
      description: 'Un cadre chaleureux, élégant et parfaitement adapté à vos séjours professionnels, touristiques ou familiaux.'
    },
    {
      image: 'assets/images/banniere/bann2.png',
      title: 'Le confort moderne',
      subtitle: 'au cœur de Thiès',
      description: 'Un cadre chaleureux, élégant et parfaitement adapté à vos séjours professionnels, touristiques ou familiaux.'
    },
    {
      image: 'assets/images/banniere/bann3.png',
      title: 'Le confort moderne',
      subtitle: 'au cœur de Thiès',
      description: 'Un cadre chaleureux, élégant et parfaitement adapté à vos séjours professionnels, touristiques ou familiaux.'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
