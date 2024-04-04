import { Component } from '@angular/core';
import { NavUtilityComponent } from '../shared/nav-utility/nav-utility.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-About-page',
  standalone: true,
  imports: [NavUtilityComponent, CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {}
