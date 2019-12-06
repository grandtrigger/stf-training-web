import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseMaterialModule } from 'src/app/core/config/base-material.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';


/**
 * Domínio de Categoria
 */
@NgModule({
  declarations: [CategoryListComponent, CategoryDetailComponent],
  imports: [
    CommonModule,
    BaseMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [CategoryListComponent, CategoryDetailComponent]
})
export class CategoryModule { }
