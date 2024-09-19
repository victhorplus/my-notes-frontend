import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticateService, TokenService } from '../../providers/services';
import { Router } from '@angular/router';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnDestroy {
  form: FormGroup;
  isLoading: boolean;
  onDestroy$: Subject<void>;

  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private tokenService: TokenService,
    private router: Router
  ){
    this.onDestroy$ = new Subject();
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  authenticate(){
    const { email, password } = this.form.value;

    this.isLoading = true;
    this.authenticateService.authenticate(email, password)
    .pipe(
      finalize(() => this.isLoading = false),
      takeUntil(this.onDestroy$)
    )
    .subscribe(result => {
      const { accessToken, user } = result;

      localStorage.setItem('user', JSON.stringify(user));
      this.tokenService.storeAccessToken(accessToken);
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
