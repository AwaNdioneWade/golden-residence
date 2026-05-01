import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChambre } from './card-chambre';

describe('CardChambre', () => {
  let component: CardChambre;
  let fixture: ComponentFixture<CardChambre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChambre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChambre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
