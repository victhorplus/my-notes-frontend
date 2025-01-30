import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components';

@Component({
  selector: 'app-account-manager-page',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './account-manager-page.component.html',
  styleUrl: './account-manager-page.component.scss'
})
export class AccountManagerPageComponent {

}
