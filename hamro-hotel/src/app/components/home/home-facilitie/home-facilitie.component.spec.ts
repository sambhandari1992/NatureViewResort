import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFacilitieComponent } from './home-facilitie.component';

describe('HomeFacilitieComponent', () => {
  let component: HomeFacilitieComponent;
  let fixture: ComponentFixture<HomeFacilitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFacilitieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFacilitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
