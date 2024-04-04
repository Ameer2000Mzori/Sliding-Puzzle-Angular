import { Component } from '@angular/core';
import { NavUtilityComponent } from '../shared/nav-utility/nav-utility.component';

@Component({
  selector: 'app-scores-page',
  standalone: true,
  imports: [NavUtilityComponent],
  templateUrl: './scores-page.component.html',
  styleUrl: './scores-page.component.scss',
})
export class ScoresPageComponent {}
