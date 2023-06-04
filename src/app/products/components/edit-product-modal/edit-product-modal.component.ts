import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductItem } from '../../interfaces/products.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Categories } from 'src/app/common/enums/categories';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {
  public editProductForm: FormGroup;
  public categories = Categories;
  private readonly MODES = { add: 'add', edit: 'edit' };
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {product: ProductItem, mode: string},
  ) { }
  ngOnInit(): void {
    this.initializeComponents();
  }
  private initializeComponents(): void {
    this.editProductForm = this.fb.group({
      name: new FormControl(this.data.product.name || '', Validators.required),
      price: new FormControl(this.data.product.price || null, Validators.required),
      category: new FormControl(this.data.product.category || null, Validators.required),
      }
    );
  }
  public handleCancel(): void {
    this.dialogRef.close();
  }
}
