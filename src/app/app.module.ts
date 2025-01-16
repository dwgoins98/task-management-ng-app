import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIModule } from './ui/card/ui.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksModule } from './tasks/tasks.module';

@NgModule({ // Non-standalone components
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, UIModule, TasksModule], // Standalone components *** All Pipes are included in this module
})
export class AppModule {}
