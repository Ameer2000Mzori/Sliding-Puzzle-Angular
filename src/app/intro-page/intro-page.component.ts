import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent {
  title = 'sliding-puzzle';
}
