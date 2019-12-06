import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/core/entity/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categoryBehaviorSubject: BehaviorSubject<CategoryServiceType> = new BehaviorSubject({
    list: new Array()
  });
  
  constructor(private http: HttpClient) { }

  getCategoryList(): void {
    this.http.get<Array<Category>>('http://localhost:8080/categorias').subscribe(
      result => {
        this.categoryBehaviorSubject.next({
          list: result
        });
      }
    );
  }

  saveCategory(category: Category): void {
    this.http.post<Category>('http://localhost:8080/categorias', category).subscribe(
      result => {
        this.getCategoryList();
      }
    );
  }
}

export interface CategoryServiceType {
  list: Array<Category>
}
