import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllReviewsComponent } from './view-all-reviews.component';

describe('ViewAllReviewsComponent', () => {
  let component: ViewAllReviewsComponent;
  let fixture: ComponentFixture<ViewAllReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
