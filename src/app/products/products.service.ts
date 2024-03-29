import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductBaseItem, ProductsResponse } from './interfaces/products.interface';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _baseUrl: string = '';
  constructor(    
    private readonly http: HttpClient,
    private readonly configurationService: ConfigurationService
    ) { 
      this._baseUrl = configurationService.baseUrl;
    }

  public getProducts(category: string = '', page: number = 1, limit: number = 10): Observable<ProductsResponse> {
    if( category !== '') {
      return this.http.get<ProductsResponse>(`${this._baseUrl}products/category/${category}?page=${page.toString()}&limit=${limit.toString()}`);
    }else {
      return this.http.get<ProductsResponse>(`${this._baseUrl}products?page=${page.toString()}&limit=${limit.toString()}`);
    }
  }
  public delete(id: string): Observable<any>{
    return this.http.delete(`${this._baseUrl}products/${id}`);
  }
  public update(id: string, body: ProductBaseItem): Observable<any>{
    return this.http.patch(`${this._baseUrl}products/${id}`, body);
  }
  public add(product: ProductBaseItem): Observable<any>{
    return this.http.post(`${this._baseUrl}products`, product);
  }
}
