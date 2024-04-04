import { Component } from '@angular/core';
import { NavUtilityComponent } from '../shared/nav-utility/nav-utility.component';

@Component({
  selector: 'app-About-page',
  standalone: true,
  imports: [NavUtilityComponent],
  templateUrl: './About-page.component.html',
  styleUrl: './About-page.component.scss',
})
export class AboutPageComponent {}
