import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAttrectionComponent } from './local-attrection.component';

describe('LocalAttrectionComponent', () => {
  let component: LocalAttrectionComponent;
  let fixture: ComponentFixture<LocalAttrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAttrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalAttrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
