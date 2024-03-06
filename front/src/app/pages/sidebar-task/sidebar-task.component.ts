import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-task',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-task.component.html',
})
export class SidebarTaskComponent {
  @Input() showTaskSidebar: any;
}
