import { Component, OnInit } from '@angular/core';
import { Category } from './core/entity/Category';

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

  private categoryList: Array<Category> = new Array();

  constructor() {
    
  }

  ngOnInit() {
    // Simula uma Promise para exibir a lista de categorias
    setTimeout(() => {
      this.getCategoryList();
    }, 2000);

    this.createCategory();

    console.log('APPCOMPONENT: executando onInit');
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
    this.categoryList = new Array(
      {
        id: 1,
        nome: "Lazer"
      },
      {
        id: 2,
        nome: "Alimentação"
      },
      {
        id: 3,
        nome: "Supermercado"
      },
      {
        id: 4,
        nome: "Farmácia"
      },
      {
        id: 5,
        nome: "Estudo"
      },
      {
        id: 6,
        nome: "Outros"
      }
    );
  }
}