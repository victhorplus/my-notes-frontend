import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { AuthenticateService } from '../../providers/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imageSource: string = 'assets/images/default-profile-image.png';
  isLogged: boolean;

  constructor(private router: Router, private authenticateService: AuthenticateService) {
    this.router.events.subscribe(() => {
      this.isLogged = this.authenticateService.isLogged();
    })
  }
  
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
