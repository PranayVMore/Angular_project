import { ProductapiService } from './services/productapi.service';
// import { BookmyshowModule } from './bookmyshowmodule/bookmyshow.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { HomecompComponent } from './Pages/homecomp/homecomp.component';
// import { SignupComponent } from './auth/signup/signup.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
// import { MyshowComponent } from './bookmyshowmodule/myshow/myshow.component';

// import { AllshowComponent } from './bookmyshowmodule/allshow/allshow.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { ShowdetailsComponent } from './bookmyshowmodule/showdetails/showdetails.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './materialUi/material/material.module';
import { StreamComponent } from './bookmyshowmodule/stream/stream.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgxSpinnerModule } from 'ngx-spinner';
import { MyshowComponent } from './bookmyshowmodule/myshow/myshow.Component';
import { CartService } from './services/cart.service';


console.log("App module load")

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomecompComponent,
    ContactComponent,
    AboutComponent,
    StreamComponent,
    MyshowComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [CartService],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
