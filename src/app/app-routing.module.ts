import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewpatientComponent  } from './newpatient/newpatient.component';
import {OldpatientComponent  } from './oldpatient/oldpatient.component';
import { ConsultationComponent } from './consultation/consultation.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/new',
    pathMatch:'full'
  },
  {
    path:'new',
    component:NewpatientComponent
  },
  {
    path:'login',
    component:OldpatientComponent
  },
  {
    path:'consultation',
    component:ConsultationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
