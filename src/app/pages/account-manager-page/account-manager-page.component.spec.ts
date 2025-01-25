import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagerPageComponent } from './account-manager-page.component';

describe('AccountManagerPageComponent', () => {
  let component: AccountManagerPageComponent;
  let fixture: ComponentFixture<AccountManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
