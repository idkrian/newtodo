import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-option.component.html',
})
export class MenuOptionComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
}
