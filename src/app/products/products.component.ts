import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductsCoreLayer } from './products-table.core.layer';
import { ProductItem, ProductsResponse } from './interfaces/products.interface';
import { ProductsService } from './products.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
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
  subscription: Subscription = new Subscription();
  constructor(
    private readonly productsCoreLayer: ProductsCoreLayer,
    private readonly productService: ProductsService,
    private readonly router: Router,
  ) {
    this.displayedColumns = this.columns.map(column => column.column);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.subscription.add(
    this.productService.getProducts().subscribe(
      (productsResponse: ProductsResponse)=> this.setTableData(productsResponse),
      //handle error
      ))

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  public handlePaginatorChange(event: PageEvent): void{
    console.log(event);
    this.subscription.add(
      this.productService.getProducts(event.pageIndex + 1, event.pageSize).subscribe(
        (productsResponse: ProductsResponse) => this.setTableData(productsResponse)
      )
    )
  }
  private setTableData(productsResponse: ProductsResponse):void {
    this.products = productsResponse.items;
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.sort = this.sort;
    this.paginator.pageSize = productsResponse.meta.itemsPerPage;
    this.paginator.length = productsResponse.meta.totalItems;
  }
  public handleRowClick( row: ProductItem): void {
    if( row.id){
      this.router.navigateByUrl(`/productos/${row.id}`);
    }
  }
}

