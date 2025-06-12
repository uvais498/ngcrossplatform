import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebaritem',
  imports: [CommonModule,MatIconModule],
  templateUrl: './sidebaritem.component.html',
  styleUrl: './sidebaritem.component.css',
})
export class SidebaritemComponent {
  @Input() item!: MenuItem;
  @Input() level = 0;
  expanded = false;
  toggle(): void {
    if (this.item.children) {
      this.expanded = !this.expanded;
    }
  }
}
