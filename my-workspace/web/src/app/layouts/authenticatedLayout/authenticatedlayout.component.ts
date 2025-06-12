import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { HeaderComponent } from "../../../components/common/header/header.component";
import { SidebarComponent } from "../../../components/common/sidebar/sidebar.component";
@Component({
  selector: 'app-authenticatedlayout',
  imports: [CommonModule, RouterModule, MatSidenavModule, HeaderComponent, SidebarComponent],
  templateUrl: './authenticatedlayout.component.html',
  styleUrl: './authenticatedlayout.component.css',
})
export class AuthenticatedlayoutComponent {
  
  
  drawerOpened = true;
  @ViewChild('drawer') drawer!: MatDrawer;
  toggleDrawer(): void {
    this.drawer.toggle();
  }
  drawerStateChanged(isOpen: boolean): void {
  this.drawerOpened = isOpen;
}

  
}


