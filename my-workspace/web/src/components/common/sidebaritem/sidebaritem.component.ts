import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() selectedRoute = '';
  @Input() level = 0;
  @Output() itemSelected = new EventEmitter<string>();
  expanded = false;
  toggle(): void {
    if (this.item.children) {
      this.expanded = !this.expanded;
    } else if (this.item.route) {
      this.itemSelected.emit(this.item.route);
    }
  }

   onChildSelect(route: string) {
    this.itemSelected.emit(route);
  }
}
