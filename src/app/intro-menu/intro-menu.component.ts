import { Component } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';

@Component({
  selector: 'app-intro-menu',
  standalone: true,
  imports: [PuzzleComponent],
  templateUrl: './intro-menu.component.html',
  styleUrl: './intro-menu.component.scss',
})
export class IntroMenuComponent {}
