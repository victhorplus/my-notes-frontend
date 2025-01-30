import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss'
})
export class AccountPageComponent {

}
