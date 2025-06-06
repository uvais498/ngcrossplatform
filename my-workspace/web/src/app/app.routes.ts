import { Route } from '@angular/router';
import { AuthenticatedlayoutComponent } from './layouts/authenticatedLayout/authenticatedlayout.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { GuestGuard } from '../core/guards/guest.guard';

export const appRoutes: Route[] = [
    {
        path: '',
        component: AuthenticatedlayoutComponent,
        canActivate: [AuthGuard],
        children:
            [
                {
                    path: '',
                    loadChildren: () =>
                        import('../modules/products/products.routes')
                            .then(m => m.productsRoutes),
                }
            ]
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [GuestGuard],
        children:
            [
                {
                    path: '',
                    loadChildren: () =>
                        import('../modules/auth/auth.routes')
                            .then(m => m.authRoutes),
                }
            ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];
