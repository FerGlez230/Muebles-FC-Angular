import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductsCoreLayer } from './products-table.core.layer';
import { ProductItem, ProductsResponse } from './interfaces/products.interface';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<ProductItem>;
  columns = [
    {column: 'name',  title: 'Producto'},
    {column: 'price', title:'Precio'},
    {column: 'category', title:'Categoria'},
    {column: 'shortTermPrice', title:'Contado'},
    {column: 'longTermPrice', title:'Abonos'},
  ]
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;
  products$: Observable<any> | undefined;
  products: ProductItem[] = [];
  constructor(
    private readonly productsCoreLayer: ProductsCoreLayer,
    private readonly productService: ProductsService,
  ) {
    this.displayedColumns = this.columns.map(column => column.column);
  }
  ngOnInit(): void {
    // this.paginator.

    //const users = Array.from({length: 100}, (_, k) => this.productsCoreLayer.createNewProduct(k + 1));
  }

  ngAfterViewInit() {
    this.productService.getProducts().subscribe((productsResponse: ProductsResponse)=>{
      this.products = productsResponse.items;
      console.log(productsResponse)
      this.paginator.pageSize = productsResponse.meta.itemsPerPage;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.paginator.length= 25;
      this.dataSource.paginator.length =25;
      console.log('paginator', this.paginator)
      this.dataSource.sort = this.sort;
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  handlePaginatorChange(event: any){
    console.log(event);
  }
}

