import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecompComponent } from './Pages/homecomp/homecomp.component';
import { ContactComponent } from './Pages/contact/contact.component';
// import { FooterComponent } from './Pages/footer/footer.component';
import { AboutComponent } from './Pages/about/about.component';
import { HeaderComponent } from './Pages/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StreamComponent } from './bookmyshowmodule/stream/stream.component';
// import { CartComponent } from './bookmyshowmodule/cart/cart.component';
// import { ShowdetailsComponent } from './bookmyshowmodule/showdetails/showdetails.component';
// import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  // default routing
  {
    path:'', component: HomecompComponent
  },
  // static routing

  {
    path:'header', component: HeaderComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'stream', component: StreamComponent
  },
  // {
  //   path:'cart', component:CartComponent
  // },
  // lazy loading
  // 2gb -app  500mb
  // auth=400mb
  // product- 1148mb
  // user auth module
//  asynchronus .then .catch promises method
  {
    path:"auth", loadChildren: () =>import('./auth/auth.module').then(m => m.AuthModule)

  },
  {
    path:"bookmyshowmodule", loadChildren: () =>import('./bookmyshowmodule/bookmyshow.module').then(pm => pm.BookmyshowModule)

  },
  // wild card routing--this define at end
  {
    path:"**", component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
