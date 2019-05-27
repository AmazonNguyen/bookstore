import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCartComponent } from './book-cart/book-cart.component';


const routes: Routes = [
  {path:'', redirectTo:'/book', pathMatch:'full'},
  {path:'book', component:HomeComponent},
  {path:'book/detail/:id', component:BookDetailComponent},
  {path:'book/cart', component:BookCartComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
