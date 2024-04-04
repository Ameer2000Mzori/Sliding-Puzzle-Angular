import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav-utility',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-utility.component.html',
  styleUrl: './nav-utility.component.scss',
})
export class NavUtilityComponent {
  text = 'go back';
}
