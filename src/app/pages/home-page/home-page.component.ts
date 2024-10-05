import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListContainerComponent } from './containers';
import { AccesTokenTimerComponent } from '../../components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NoteListContainerComponent, AccesTokenTimerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent { }
