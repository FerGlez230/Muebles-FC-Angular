import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    DeleteModalComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [],
  exports: [ 
    AngularMaterialModule,
    HeaderComponent,
    SidenavComponent,
    DeleteModalComponent,
  ]
})
export class CommonComponentsModule { }