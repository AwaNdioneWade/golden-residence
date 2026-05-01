import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChambres } from './all-chambres';

describe('AllChambres', () => {
  let component: AllChambres;
  let fixture: ComponentFixture<AllChambres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllChambres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllChambres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
