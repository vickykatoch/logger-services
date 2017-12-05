import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SearchComponent } from './search/search.component';
import { logChildRouterConfig } from './log-child-router.config';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(logChildRouterConfig)
  ],
  declarations: [SearchComponent]
})
export class LogAnalyzerModule { }
