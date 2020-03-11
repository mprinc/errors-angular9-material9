import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogOverviewExample } from './dialog/dialog-overview-example';


const routes: Routes = [
  {
    path: "dialog",
    component: DialogOverviewExample
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
