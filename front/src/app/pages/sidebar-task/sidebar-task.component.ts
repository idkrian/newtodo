import { Component, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-task.component.html',
})
export class SidebarTaskComponent {
  constructor(private dataService: DataService) {}

  showTaskSidebar() {
    return this.dataService.showTaskSidebar;
  }
}
