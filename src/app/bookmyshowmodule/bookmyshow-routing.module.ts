import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllshowComponent } from './allshow/allshow.component';
import { MyshowComponent } from './myshow/myshow.Component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { AddshowComponent } from './admin/addshow/addshow.component';
import { UpdateshowComponent } from './admin/updateshow/updateshow.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { authGuard } from '../Guard/auth.guard';
import { StreamComponent } from './stream/stream.component';



const routes: Routes = [
  // static routing
  {
    path:'allshow', component:AllshowComponent
  },
  {
    path:'myshow', component:MyshowComponent
  },
  {
    path:'addshow', component:AddshowComponent
  },
  {
    path:'stream', component:StreamComponent
  },

  // dynamic routing
  {
    path:'updateshow/:id', component:UpdateshowComponent
  },
  {
    path:'admin-dashboard', component:AdminDashboardComponent,
    canActivate: [authGuard]
  },
  // dynamic routing -- activated routing
  {
    path:'showdetail/:cat/:id', component:ShowdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class bookmyshowRoutingModule { }
