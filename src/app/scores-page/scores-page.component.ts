import { DataService } from '../services/DataService';
import { NavUtilityComponent } from '../shared/nav-utility/nav-utility.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores-page',
  standalone: true,
  imports: [NavUtilityComponent],
  templateUrl: './scores-page.component.html',
  styleUrl: './scores-page.component.scss',
})
export class ScoresPageComponent implements OnInit {
  state: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Initialize state
    this.dataService.state$.subscribe((newState) => {
      this.state = newState;
    });
  }
}
