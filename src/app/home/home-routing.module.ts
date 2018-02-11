import { HomeComponent } from './containers/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreScreen1Component } from './containers/pre-screen-1/pre-screen-1.component';
import { PreScreen2Component } from './containers/pre-screen-2/pre-screen-2.component';
import { DiscussCaseComponent } from './containers/discuss-case/discuss-case.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PreScreen1Component},
  {path: 'screen-2', component: PreScreen2Component},
  {path: 'discuss', component: DiscussCaseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
