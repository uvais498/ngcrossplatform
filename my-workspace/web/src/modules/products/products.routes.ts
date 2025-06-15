import { Route } from "@angular/router";
import { ProductlistComponent } from "./productlist/productlist.component";
import { TaxonomyComponent } from "./taxonomy/createtaxonmoy/taxonomy.component";

export const productsRoutes: Route[] = [
    {
        path: '',
        component: ProductlistComponent
    },
    {
        path : 'taxonomy',
        component: TaxonomyComponent
    }
];