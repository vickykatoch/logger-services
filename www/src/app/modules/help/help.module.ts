import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';

const routerConfig = [
  {
    path: '',
    component: AboutComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [AboutComponent]
})
export class HelpModule { }
