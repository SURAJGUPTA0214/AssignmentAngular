import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'postalook',Component=postalook},
  // { path:'login', component:login },
  // { path:'flaunt', component:flaunt },
  // { path:'read', component:'read' },
  // { path:'watch', component:'watch' },
  // { path:'shop', component:'shop' },
  // { path:'stylewedding', component:'stylewedding' },
  // { path:'chrityauction', component:'chrityauction' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
