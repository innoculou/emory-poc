import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { PreScreen1Component } from './containers/pre-screen-1/pre-screen-1.component';
import { PreScreen2Component } from './containers/pre-screen-2/pre-screen-2.component';
import { DiscussCaseComponent } from './containers/discuss-case/discuss-case.component';
import { FooterComponent } from './containers/footer/footer.component';
import { MeetYourSurgeonComponent } from './containers/meet-your-surgeon/meet-your-surgeon.component';
import { PreopComponent } from './containers/preop/preop.component';

const COMPONENTS = [
  HomeComponent,
  DiscussCaseComponent,
  PreScreen2Component,
  PreScreen1Component
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    ...COMPONENTS,
    FooterComponent,
    MeetYourSurgeonComponent,
    PreopComponent,
  ]
})
export class HomeModule { }
