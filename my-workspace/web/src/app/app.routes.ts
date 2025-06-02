import { Route } from '@angular/router';
import { AuthenticatedlayoutComponent } from './layouts/authenticatedLayout/authenticatedlayout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

export const appRoutes: Route[] = [
     {
        path: '',
        component: AuthenticatedlayoutComponent,
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
        redirectTo: 'register' 
    }
    
];
