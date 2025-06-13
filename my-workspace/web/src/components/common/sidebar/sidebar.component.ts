import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS } from '../../../core/navigation/routerlinks';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { SidebaritemComponent } from '../sidebaritem/sidebaritem.component';
import { SkeletonDirective } from '../../../core/directives/skelton.directive';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    SidebaritemComponent,
    SkeletonDirective
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
selectedRoute = '';
isLoading = true;
   menu: MenuItem[] = MENU_ITEMS;
   expanded = new Set<any>();


   ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
  }
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
