import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bookmyshowRoutingModule } from './bookmyshow-routing.module';
import { AllshowComponent } from './allshow/allshow.component';
import { MyshowComponent } from './myshow/myshow.Component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { AddshowComponent } from './admin/addshow/addshow.component';
import { UpdateshowComponent } from './admin/updateshow/updateshow.component';
import { MaterialModule } from '../materialUi/material/material.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CartComponent } from './cart/cart.component';




console.log("movie module load")

@NgModule({
  declarations: [
    AllshowComponent,
    ShowdetailsComponent,
    AddshowComponent,
    UpdateshowComponent,
    AdminDashboardComponent,
    // CartComponent,
  ],
  imports: [
    CommonModule,
    bookmyshowRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookmyshowModule { }
