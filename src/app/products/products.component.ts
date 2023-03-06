import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductsCoreLayer } from './products-table.core.layer';
import { ProductItem } from './interfaces/products.interface';
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
    {column: 'priceShortTerm', title:'Contado'},
    {column: 'priceLongTerm', title:'Abonos'},
  ]
  @ViewChild(MatPaginator)
  paginator!: MatPaginator | null;
  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
    private readonly productsCoreLayer: ProductsCoreLayer
  ) {
    this.displayedColumns = this.columns.map(column => column.column);
  }
  ngOnInit(): void {
      // Create 100 users
      const users = Array.from({length: 100}, (_, k) => this.productsCoreLayer.createNewProduct(k + 1));
      this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

