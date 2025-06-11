import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import { HeaderComponent } from "../../../components/common/header/header.component";
import { SidebarComponent } from "../../../components/common/sidebar/sidebar.component";
@Component({
  selector: 'app-authenticatedlayout',
  imports: [CommonModule, RouterModule, MatSidenavModule, HeaderComponent, MatIconModule, SidebarComponent],
  templateUrl: './authenticatedlayout.component.html',
  styleUrl: './authenticatedlayout.component.css',
})
export class AuthenticatedlayoutComponent {
   menu = MENU_ITEMS;
  expanded = new Set<any>();
  drawerOpened = true;
  @ViewChild('drawer') drawer!: MatDrawer;
  toggleDrawer(): void {
    this.drawer.toggle();
  }
  drawerStateChanged(isOpen: boolean): void {
  this.drawerOpened = isOpen;
}

  toggle(item: any) {
    if (this.expanded.has(item)) {
      this.expanded.delete(item);
    } else {
      this.expanded.add(item);
    }
  }
}

export const MENU_ITEMS = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard'
  },
  {
    label: 'Products',
    icon: 'inventory_2',
    children: [
      {
        label: 'All Products',
        route: '/products/all'
      },
      {
        label: 'Categories',
        route: '/products/categories'
      }
    ]
  },
  {
    label: 'Settings',
    icon: 'settings',
    children: [
      {
        label: 'Profile',
        route: '/settings/profile',
        children:[ {
        label: 'Account',
        route: '/settings/account'
      }]
      },
      {
        label: 'Account',
        route: '/settings/account'
      }
    ]
  }
];
