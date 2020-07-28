import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [TagListComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  exports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    TagListComponent,
  ],
})
export class SharedModule {}
