import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticateService, TokenService } from '../../providers/services';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private tokenService: TokenService
  ){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  authenticate(){
    const { email, password } = this.form.value;
    this.authenticateService.authenticate(email, password).subscribe(result => {
      const { accessToken, user } = result;

      localStorage.setItem('user', JSON.stringify(user));
      this.tokenService.storeAccessToken(accessToken);
    });
  }

  teste(): void {
    this.tokenService.renewAccessToken().subscribe(res => {
      console.log('sub', res)
    })
  }
}
