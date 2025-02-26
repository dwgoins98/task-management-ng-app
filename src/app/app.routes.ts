import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'Home'
    }
];
