import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuItem } from '../../../../classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  menuList: SideMenuItem[] = [
    { label: 'Dados da conta', route: '' },
    { label: 'Alterar e-mail', route: '' },
    { label: 'Alterar senha', route: '' },
    { label: 'Excluir conta', route: '' }
  ];
}
