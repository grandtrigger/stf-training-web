import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/entity/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>('http://localhost:8080/categorias');
  }
}
