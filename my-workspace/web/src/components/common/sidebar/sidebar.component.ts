import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS } from '../../../core/navigation/routerlinks';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidebaritemComponent } from '../sidebaritem/sidebaritem.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    SidebaritemComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
selectedRoute = '';
   menu: MenuItem[] = MENU_ITEMS;
   expanded = new Set<any>();

   onItemSelected(route: string) {
    this.selectedRoute = route;
    // Optionally navigate:
    // this.router.navigateByUrl(route);
  }


   toggle(item: any) {
    if (this.expanded.has(item)) {
      this.expanded.delete(item);
    } else {
      this.expanded.add(item);
    }
  }
}



export interface MenuItem {
  label?: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}
