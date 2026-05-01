import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSejour } from './reservation-sejour';

describe('ReservationSejour', () => {
  let component: ReservationSejour;
  let fixture: ComponentFixture<ReservationSejour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationSejour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationSejour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
