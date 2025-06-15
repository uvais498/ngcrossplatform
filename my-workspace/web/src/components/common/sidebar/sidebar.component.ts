import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS } from '../../../core/navigation/routerlinks';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { SidebaritemComponent } from '../sidebaritem/sidebaritem.component';
import { SkeletonDirective } from '../../../core/directives/skelton.directive';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, UserActions } from '@my-workspace/shared';
import { Observable } from 'rxjs';
import { ConfirmdialogService } from '../../../core/services/confirmdialog.service';

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
   isAuthenticated$!: Observable<boolean>;
selectedRoute = '';
isLoading = true;
   menu: MenuItem[] = MENU_ITEMS;
   expanded = new Set<any>();

   constructor(private store: Store,
    private router: Router,
    private confirmDialog: ConfirmdialogService
   ){

   }

   ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    setTimeout(() => {
      this.isLoading = false;
    }, 600); 
  }
   onItemSelected(route: string) {
    this.selectedRoute = route;
    this.router.navigateByUrl(route);
  }


   toggle(item: any) {
    if (this.expanded.has(item)) {
      this.expanded.delete(item);
    } else {
      this.expanded.add(item);
    }
  }

  logout() {
    this.logoutR();
}
  logoutR(){
    this.confirmDialog.confirmWithAsyncCallbacks({
      title: 'Log Out?',
    message: 'This action cannot be undone.',
    confirmText: 'Yes',
    cancelText: 'Cancel',
    disableCloseDuringAsync: true
    },
    async () => {
    this.store.dispatch(UserActions.logOut());
   this.isAuthenticated$.subscribe(isAuth => isAuth && this.router.navigate(['/']));
    console.log('Deleted!');
  },
  async () => {
    console.log('Cancelled');
  }
  )
  
}
}

export interface MenuItem {
  label?: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}
