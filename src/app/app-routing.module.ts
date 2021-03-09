import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";


const routes: Routes = [
  {path:'EventBinding', component : EventBindingComponent},
  {path:'TwoWayDataBindingComponent', component : TwoWayDataBindingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
