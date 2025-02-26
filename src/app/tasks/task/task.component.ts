import { Component, inject, input, Input } from '@angular/core';

import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, ResolveFn, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // @Input({ required: true }) task!: Task;
  task = input.required<Task>();

  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order']
  const tasksService = inject(TasksService);
  const tasks =  tasksService.allTasks()
  .filter((task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'))
  
  if (order && order === 'asc'){
    tasks.sort((a,b) => (a.id > b.id ? 1 : -1))
  } else {
    tasks.sort((a,b) => (a.id > b.id ? -1 : 1))
  }

  return tasks.length ? tasks : []
}