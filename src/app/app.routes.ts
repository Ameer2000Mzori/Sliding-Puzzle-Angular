import { Routes } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { ScoresPageComponent } from './scores-page/scores-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroPageComponent },
  { path: 'game', component: PuzzleComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'scores', component: ScoresPageComponent },

  { path: '**', redirectTo: '/intro', pathMatch: 'full' },
];
