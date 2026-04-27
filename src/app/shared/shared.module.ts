import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { PageFooterComponent } from './component/page-footer/page-footer.component';
import { PageSideNavComponent } from './component/page-side-nav/page-side-nav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';



@NgModule({
  declarations: [PageHeaderComponent, PageFooterComponent, PageSideNavComponent, PageNotFoundComponent,],
  imports: [
    CommonModule, MaterialModule,RouterModule
  ],
  exports:[
    CommonModule, MaterialModule, PageHeaderComponent,PageFooterComponent,PageSideNavComponent,RouterModule,PageNotFoundComponent
  ]
})
export class SharedModule { }
