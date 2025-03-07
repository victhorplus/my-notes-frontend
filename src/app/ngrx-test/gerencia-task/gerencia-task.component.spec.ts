import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaTaskComponent } from './gerencia-task.component';

describe('GerenciaTaskComponent', () => {
  let component: GerenciaTaskComponent;
  let fixture: ComponentFixture<GerenciaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciaTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
