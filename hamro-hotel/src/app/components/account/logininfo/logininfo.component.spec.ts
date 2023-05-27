import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininfoComponent } from './logininfo.component';

describe('LogininfoComponent', () => {
  let component: LogininfoComponent;
  let fixture: ComponentFixture<LogininfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogininfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
