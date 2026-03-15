import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp2 } from './comp2/comp2';
import { Comp1 } from './comp1/comp1';

const routes: Routes = [ 
  {
    path: "comp2",
    component:Comp2
  },
   {
    path: "comp1",
    component:Comp1
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
