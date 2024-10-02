import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesTokenTimerComponent } from './acces-token-timer.component';

describe('AccesTokenTimerComponent', () => {
  let component: AccesTokenTimerComponent;
  let fixture: ComponentFixture<AccesTokenTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesTokenTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesTokenTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
