import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-option.component.html',
})
export class MenuOptionComponent {
  constructor(private router: Router) {}
  navigateTo(page: string) {
    this.router.navigate([page]);
  }
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() navigate?: string = '';
}
