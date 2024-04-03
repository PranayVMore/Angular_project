import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

let materialcomp =[
  MatButtonModule,
  MatCardModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialcomp
  ],
  exports :[
    materialcomp
  ]
})
export class MaterialModule { }
