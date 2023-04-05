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
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductItem,
  ) { }
  ngOnInit(): void {
    console.log('data', this.data)
    this.initializeComponents();
  }
  private initializeComponents(): void {
    this.editProductForm = this.fb.group({
      name: new FormControl(this.data.name || '', Validators.required),
      price: new FormControl(this.data.price || 0, Validators.required),
      category: new FormControl(this.data.category || null, Validators.required),
      }
    );
    console.log(this.editProductForm);
  }
  public handleCancel(): void {
    this.dialogRef.close();
  }
}
