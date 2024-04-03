import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PuzzleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sliding-puzzle';
}
