import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
  ], 
  exports: [
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
  ]
})
export class AngularMaterialModule { }
