import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateCategory, createSubcategory, createTopic, CustomResponse, UpdateCategory, UpdateSubCategory } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCategoryService {

  private apiUrl = 'http://localhost:3030/api/';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CustomResponse> {
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }
  createNewCategories(createCategory: CreateCategory): Observable<CustomResponse> {
    return this.http.post<any>(`${this.apiUrl}/categories`, createCategory);
  }
  updateCategories(id: string, updateCategory: UpdateCategory): Observable<CustomResponse> {
    return this.http.put<any>(`${this.apiUrl}/categories/${id}`, updateCategory);
  }
  deleteCategory(id: string): Observable<CustomResponse> {
    return this.http.delete<any>(`${this.apiUrl}/categories/${id}`);
  }



  addNewSubCategories(createSubcategory: createSubcategory): Observable<CustomResponse> {
    return this.http.post<any>(`${this.apiUrl}/sub-categories`, createSubcategory);
  }

  updateSubCategories(id: string, updateSubCategory: UpdateSubCategory): Observable<CustomResponse> {
    return this.http.put<any>(`${this.apiUrl}/sub-categories/${id}`, updateSubCategory);
  }

  deleteSubCategories(id: string): Observable<CustomResponse> {
    return this.http.delete<any>(`${this.apiUrl}/sub-categories/${id}`);
  }




  addNewTopic(createTopic: createTopic): Observable<CustomResponse> {
    return this.http.post<any>(`${this.apiUrl}/topics`, createTopic);
  }

  deleteTopic(id: string): Observable<CustomResponse> {
    return this.http.delete<any>(`${this.apiUrl}/topics/${id}`);
  }
}
