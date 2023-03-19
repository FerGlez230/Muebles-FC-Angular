import { Injectable } from '@angular/core';
import { ProductItem } from './interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsCoreLayer {
    createNewProduct(id: number): ProductItem {
      
        return {
            id: 'bsb',
            name: 'Fer',
            price: 45,
            category: 'Villas',
            shortTermPrice: 40,
            longTermPrice: 50,
        };
      }
}
