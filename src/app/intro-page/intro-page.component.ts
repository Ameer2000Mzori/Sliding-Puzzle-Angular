import { Component } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [PuzzleComponent],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent {
  title = 'sliding-puzzle';
}
