import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { FavoriteInstrumentsComponent } from './favorite-instruments/favorite-instruments.component';

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
  declarations: [
    AboutComponent, 
    FavoriteInstrumentsComponent
  ]
})
export class HelpModule { }
