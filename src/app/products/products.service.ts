import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductItem, ProductsResponse } from './interfaces/products.interface';
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

  getProducts(category: string = '', page: number = 1, limit: number = 10): Observable<ProductsResponse> {
    if( category !== '') {
      return this.http.get<ProductsResponse>(`${this._baseUrl}products/category/${category}?page=${page.toString()}&limit=${limit.toString()}`);
    }else {
      return this.http.get<ProductsResponse>(`${this._baseUrl}products?page=${page.toString()}&limit=${limit.toString()}`);
    }
  }
}
