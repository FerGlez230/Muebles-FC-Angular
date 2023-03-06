import { Injectable } from '@angular/core';
import { ProductItem } from './interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsCoreLayer {
    createNewProduct(id: number): ProductItem {
      
        return {
            name: 'Fer',
            price: 45,
            category: 'Villas',
            priceShortTerm: 40,
            priceLongTerm: 50,
        };
      }
}
