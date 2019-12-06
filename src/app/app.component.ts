import { Component, OnInit } from '@angular/core';
import { Category } from './core/entity/Category';
import { CategoryService } from './containers/category/category.service';

/**
 * Inicializa a lista de Categorias, importa o componente que exibe esta listagem
 */
@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  appTitle = 'Money App';

  public categoryList: Array<Category> = new Array();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoryList();
  }

  /**
   * Gera uma nova categoria {@link Category}
   */
  private createCategory() {
    setTimeout(() => {
      this.categoryList.push({ id: 7, nome: "Cartão" });
    }, 4000);
  }

  /**
   * Gera uma lista de {@link Category} mockada
   */
  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(
      result => {
        this.categoryList = result;
      }
    );
  }
}