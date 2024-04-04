import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent {
  title = 'sliding-puzzle';
}
