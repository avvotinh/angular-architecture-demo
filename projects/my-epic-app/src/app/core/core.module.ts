import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
