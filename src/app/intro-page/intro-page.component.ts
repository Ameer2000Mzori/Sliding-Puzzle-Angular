import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { navListData } from './NavListData';
@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent {
  title = 'sliding-puzzle';

  navData = navListData;
}
