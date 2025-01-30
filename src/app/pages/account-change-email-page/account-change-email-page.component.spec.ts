import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeEmailPageComponent } from './account-change-email-page.component';

describe('ChangeEmailPageComponent', () => {
  let component: AccountChangeEmailPageComponent;
  let fixture: ComponentFixture<AccountChangeEmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountChangeEmailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountChangeEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
