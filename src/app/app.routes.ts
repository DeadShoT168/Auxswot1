import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path:"",redirectTo:"home",pathMatch:"full",
    },

    {
        path:"home",component:HomepageComponent,
    },
    {
        path:"product",component:ProductComponent,
    }
];
