import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuItem } from '../../../../classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  menuList: SideMenuItem[] = [
    { label: 'Dados da conta', route: 'info' },
    { label: 'Alterar e-mail', route: 'change-email' },
    { label: 'Alterar senha', route: 'change-password' },
    { label: 'Excluir conta', route: 'delete-account' }
  ];
}
