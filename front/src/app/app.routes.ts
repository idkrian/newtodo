import { Routes } from '@angular/router';
import { TodayComponent } from './pages/today/today.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

export const routes: Routes = [
  {
    path: '',
    component: TodayComponent,
    title: 'Today',
  },
  {
    path: 'upcoming',
    title: 'Upcoming',
    component: UpcomingComponent,
  },
];
