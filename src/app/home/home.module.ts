import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { PreScreen1Component } from './containers/pre-screen-1/pre-screen-1.component';
import { PreScreen2Component } from './containers/pre-screen-2/pre-screen-2.component';
import { DiscussCaseComponent } from './containers/discuss-case/discuss-case.component';

const COMPONENTS = [
  HomeComponent,
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
    PreScreen1Component,
    PreScreen2Component,
    DiscussCaseComponent
  ]
})
export class HomeModule { }
