import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) name!:string
    @Input({required: true}) id!:string
    
    isAddingTask: boolean = false

    tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn all the basic and advanced features of Angular @ how to apply them.',
        dueDate: '2025-02-01'
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
          'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
      }
    ]

    
    public get selectedUserTasks() {
      return this.tasks.filter((task) => task.userId === this.id)
    }
    
    onCompleteTask(id: string){
      this.tasks = this.tasks.filter((task) => task.id !== id)
      
    }

    onStartAddTask() {
      this.isAddingTask = true
    }

    onCancelAddTask(){
      this.isAddingTask = false
    }

    onAddTask(taskData: NewTaskData){

      this.tasks.unshift({ // Add task to beginning of array
        id: new Date().getTime().toString(), // For simplicity's sake
        userId: this.id,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate
      })

      this.isAddingTask = false

    }
}
