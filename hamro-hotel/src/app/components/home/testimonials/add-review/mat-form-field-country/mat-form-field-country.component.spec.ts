import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldCountryComponent } from './mat-form-field-country.component';

describe('MatFormFieldCountryComponent', () => {
  let component: MatFormFieldCountryComponent;
  let fixture: ComponentFixture<MatFormFieldCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormFieldCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormFieldCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
