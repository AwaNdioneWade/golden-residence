import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosChambres } from './nos-chambres';

describe('NosChambres', () => {
  let component: NosChambres;
  let fixture: ComponentFixture<NosChambres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosChambres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosChambres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
