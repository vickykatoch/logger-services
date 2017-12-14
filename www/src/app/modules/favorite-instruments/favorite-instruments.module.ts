import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteInstrumentsComponent } from './favorite-instruments.component';
import { RouterModule } from "@angular/router";
import { routes } from './route.config';




@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FavoriteInstrumentsComponent
    ]
})
export class FavoriteInstrumentsModule { }