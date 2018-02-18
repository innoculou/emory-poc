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
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PreScreen1Component,
    data: {
      animation: {
        value: 'home',
      }
    }
  },
  {
    path: 'prescreen',
    component: PreScreen2Component,
    data: {
      animation: {
        value: 'prescreen',
      }
    }
  },
  {
    path: 'discuss',
    component: DiscussCaseComponent,
    data: {
      animation: {
        value: 'discuss',
      }
    }
  },
  {
    path: 'meet',
    component: MeetYourSurgeonComponent,
    data: {
      animation: {
        value: 'meet',
      }
    }
  },
  {
    path: 'preop',
    component: PreopComponent,
    data: {
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
