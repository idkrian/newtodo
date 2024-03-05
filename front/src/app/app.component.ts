import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from './pages/sidebar-menu/sidebar-menu.component';
import { TaskComponent } from './components/molecules/task/task.component';
import { AddTaskButtonComponent } from './components/molecules/add-task-button/add-task-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AddTaskButtonComponent,
    TaskComponent,
    SidebarMenuComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Rian';
}
