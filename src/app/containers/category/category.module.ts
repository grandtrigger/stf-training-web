import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseMaterialModule } from 'src/app/core/config/base-material.module';
import { CategoryListComponent } from './category-list/category-list.component';


/**
 * Domínio de Categoria
 */
@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    BaseMaterialModule
  ],
  exports: [CategoryListComponent]
})
export class CategoryModule { }
