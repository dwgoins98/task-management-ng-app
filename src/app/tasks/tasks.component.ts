import { Component, inject, input, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { ResolveFn, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  isAddingTask: boolean = false;

  name = input.required<string>();
  userId = input.required<string>();
  userTasks = input.required<Task[]>();
  order = input<'asc' | 'desc'>()

  constructor(private tasksService: TasksService) {}

  // public get selectedUserTasks() {
  //   return this.tasksService.getUserTasks(this.id());
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

    if (order && order === 'asc') {
      tasks.sort((a,b) => (a.id > b.id ? 1 : -1))
    } else {
      tasks.sort((a,b) => (a.id > b.id ? -1 : 1))
    }

    return tasks.length ? tasks : []
};
