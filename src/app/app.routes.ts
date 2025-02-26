import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { userRoutes } from './user/user.routes';
import { resolveUserName, UserTasksComponent } from './user/user-tasks/user-tasks.component';

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'Home'
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes,
        resolve: {
            userName: resolveUserName,
          },
    },
    {
        path: '**',
        component: NotFoundComponent,
      },
];
