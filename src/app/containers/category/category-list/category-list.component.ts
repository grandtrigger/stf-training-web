import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Category } from 'src/app/core/entity/Category';

@Component({
  selector: 'stf-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit, OnChanges {
  @Input('categoryList')
  categoryList: Array<Category>;

  constructor() { }

  ngOnInit() {
    console.log('CATEGORYLISTCOMPONENT: executando onInit');
  }
  
  ngOnChanges() {
    console.log('CATEGORYLISTCOMPONENT: executando onChanges');
  }
}
