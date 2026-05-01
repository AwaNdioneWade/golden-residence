import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { getChambreBySlug, CHAMBRES_LIST, ChambreCard } from '../../shared/data/chambres';

@Component({
  selector: 'app-reservation-sejour',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reservation-sejour.html',
  styleUrl: './reservation-sejour.css',
})
export class ReservationSejour implements OnInit, OnDestroy {
  chambre: ChambreCard | undefined;
  readonly toutesLesChambres = CHAMBRES_LIST;
  reservationForm: FormGroup;
  private sub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.reservationForm = this.fb.group({
      chambreSlug: ['', Validators.required],
      dateArrivee: ['', Validators.required],
      dateDepart: ['', Validators.required],
      personnes: [2, [Validators.required, Validators.min(1), Validators.max(10)]],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      message: [''],
      acceptConditions: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.sub.add(
      this.route.paramMap.subscribe((params) => {
        const slug = params.get('chambreSlug');
        if (slug) {
          const found = getChambreBySlug(slug);
          if (found) {
            this.chambre = found;
            this.reservationForm.patchValue({ chambreSlug: found.slug }, { emitEvent: false });
          } else {
            void this.router.navigate(['/chambres']);
          }
        } else {
          const def = CHAMBRES_LIST[0];
          this.chambre = def;
          this.reservationForm.patchValue({ chambreSlug: def?.slug ?? '' }, { emitEvent: false });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChambreSlugChange(): void {
    const slug = this.reservationForm.get('chambreSlug')?.value as string;
    this.chambre = getChambreBySlug(slug);
    if (slug) {
      void this.router.navigate(['/reservation', slug], { replaceUrl: true });
    }
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      console.log('Réservation:', this.reservationForm.value);
    }
  }

  minDateToday(): string {
    return new Date().toISOString().split('T')[0];
  }
}
