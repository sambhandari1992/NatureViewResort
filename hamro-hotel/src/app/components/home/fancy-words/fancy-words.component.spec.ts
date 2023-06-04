import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyWordsComponent } from './fancy-words.component';

describe('FancyWordsComponent', () => {
  let component: FancyWordsComponent;
  let fixture: ComponentFixture<FancyWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
