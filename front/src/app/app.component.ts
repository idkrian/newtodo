import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from './pages/sidebar-menu/sidebar-menu.component';
import { TaskComponent } from './components/molecules/task/task.component';
import { AddTaskButtonComponent } from './components/molecules/add-task-button/add-task-button.component';
import { CommonModule } from '@angular/common';
import { SidebarTaskComponent } from './pages/sidebar-task/sidebar-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AddTaskButtonComponent,
    TaskComponent,
    SidebarMenuComponent,
    CommonModule,
    SidebarTaskComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  taskSidebar: boolean = false;

  showTaskSidebar(): void {
    this.taskSidebar = !this.taskSidebar;
  }
}
