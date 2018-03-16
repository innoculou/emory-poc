import { HomeComponent } from './containers/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreScreen1Component } from './containers/pre-screen-1/pre-screen-1.component';
import { PreScreen2Component } from './containers/pre-screen-2/pre-screen-2.component';
import { DiscussCaseComponent } from './containers/discuss-case/discuss-case.component';
import { MeetYourSurgeonComponent } from './containers/meet-your-surgeon/meet-your-surgeon.component';
import { PreopComponent } from './containers/preop/preop.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: 'home',
  component: PreScreen1Component,
  data: {
    depth: 1,
    animation: {
      value: 'home',
    }
  }
},
{
  path: 'prescreen',
  component: PreScreen2Component,
  data: {
    depth: 2,
    animation: {
      value: 'prescreen',
    }
  }
},
{
  path: 'discuss',
  component: DiscussCaseComponent,
  data: {
    depth: 3,
    animation: {
      value: 'discuss',
    }
  }
},
{
  path: 'meet',
  component: MeetYourSurgeonComponent,
  data: {
    depth: 4,
    animation: {
      value: 'meet',
    }
  }
},
{
  path: 'preop',
  component: PreopComponent,
  data: {
    depth: 5,
    animation: {
      value: 'preop',
    }
  }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
