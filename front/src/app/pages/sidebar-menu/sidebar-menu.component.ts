import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuOptionComponent } from '../../components/molecules/menu-option/menu-option.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, MenuOptionComponent],
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent {
  showSidebar = true;
  @Input() name = '';
  @Input() userData!: { name: string; age: number; job: string };

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
    console.log(this.showSidebar);
  }
}
