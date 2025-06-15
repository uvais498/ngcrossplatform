import { Route } from "@angular/router";
import { ProductlistComponent } from "./productlist/productlist.component";
import { TaxonomylayoutComponent } from "./taxonomy/taxonomylayout/taxonomylayout.component";
export const productsRoutes: Route[] = [
    {
        path: '',
        component: ProductlistComponent
    },
    {
        path : 'taxonomy',
        component: TaxonomylayoutComponent
    }
];