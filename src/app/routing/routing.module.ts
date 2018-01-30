import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { AboutUsComponent } from '../about-us/about-us.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home',  component: HomeComponent },
            { path: 'products' , component: ProductsComponent },
            { path: 'aboutUs' , component: AboutUsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}