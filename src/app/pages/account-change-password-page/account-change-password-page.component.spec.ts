import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangePasswordPageComponent } from './account-change-password-page.component';

describe('AccountChangePasswordPageComponent', () => {
  let component: AccountChangePasswordPageComponent;
  let fixture: ComponentFixture<AccountChangePasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountChangePasswordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountChangePasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
