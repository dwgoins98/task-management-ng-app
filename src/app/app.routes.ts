import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'Home'
    },
    {
        path: '**',
        component: NotFoundComponent,
      },
];
