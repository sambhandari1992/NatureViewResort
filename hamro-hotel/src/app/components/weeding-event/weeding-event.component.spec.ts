import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedingEventComponent } from './weeding-event.component';

describe('WeedingEventComponent', () => {
  let component: WeedingEventComponent;
  let fixture: ComponentFixture<WeedingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeedingEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeedingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
