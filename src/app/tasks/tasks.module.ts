import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UIModule } from "../ui/card/ui.module";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports:[TasksComponent],
    imports:[CommonModule, FormsModule, UIModule]
})

export class TasksModule{}