import { Component, OnInit } from '@angular/core';
import { Category } from './core/entity/Category';
import { CategoryService, CategoryServiceType } from './containers/category/category.service';
import { Observable, BehaviorSubject } from 'rxjs';

/**
 * Inicializa a lista de Categorias, importa o componente que exibe esta listagem
 */
@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public appTitle: string = 'Money App';

  public futuro: BehaviorSubject<CategoryServiceType>;

  
  constructor(private categoryService: CategoryService) { }


  ngOnInit() {
    this.futuro = this.categoryService.categoryBehaviorSubject;
    this.getCategoryList();
  }

  /**
   * Gera uma lista de {@link Category} mockada
   */
  private getCategoryList() {
    this.categoryService.getCategoryList();
  }
}