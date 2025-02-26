import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // @Input({ required: true }) userId!: string;
  // @Output() close = new EventEmitter<void>();

  userId = input.required<string>();

  private tasksService = inject(TasksService);
  private router = inject(Router);
  submitted: boolean = false;

  // Decorator method
  // newTitle: string = '';
  // newSummary: string = '';
  // newDueDate: string = '';

  // Signal method
  newTitle = signal('');
  newSummary = signal('');
  newDueDate = signal('');

  // onCancel() {
  //   this.close.emit();
  // }

  onSubmit() {
    console.log('Running onSubmit()')
    this.tasksService.addTask(
      {
        title: this.newTitle(),
        summary: this.newSummary(),
        dueDate: this.newDueDate(),
      },
      this.userId()
    );
    this.submitted = true
    this.router.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true
    })
  }
}

export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (
  component
) => {
  if (component.submitted) {
    return true;
  }
  if (
    component.newDueDate() ||
    component.newSummary() ||
    component.newTitle()
  ) {
    return window.confirm(
      'Are you sure you want to leave this page? The info entered will be lost.'
    );
  }
  return true;
};
