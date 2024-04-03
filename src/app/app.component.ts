import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroMenuComponent } from './intro-menu/intro-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sliding-puzzle';
}
