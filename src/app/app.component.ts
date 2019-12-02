import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  appTitle = 'Money App';

  categoryList: Array<Category> = new Array();

  ngOnInit() {
    setTimeout(() => {
      this.getCategoryList();
    }, 2000);
  }

  getCategoryList() {
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

export interface Category {
  id: number,
  nome: string
}
