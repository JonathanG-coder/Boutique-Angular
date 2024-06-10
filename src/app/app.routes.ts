import { Routes } from '@angular/router';
import { AchatsViewComponent } from './views/achats-view/achats-view.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/achats', pathMatch: 'full' },
  { path: 'achats',  component: AchatsViewComponent }
];
