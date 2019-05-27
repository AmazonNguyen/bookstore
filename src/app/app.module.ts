import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {BookService} from './book.service';
import {MatDialogModule } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { NgxLoadingModule } from 'ngx-loading';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookDetailComponent,
    BookCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    NgxPaginationModule,
    MatTooltipModule,
    NgxLoadingModule.forRoot({}),
    MatInputModule,
    MatSelectModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [BookService],
  bootstrap: [AppComponent],
  entryComponents:[
  ]
})
export class AppModule { }
