import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosAtouts } from './nos-atouts';

describe('NosAtouts', () => {
  let component: NosAtouts;
  let fixture: ComponentFixture<NosAtouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosAtouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosAtouts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
