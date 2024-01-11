import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router){

  }

  formProduct!: FormGroup;
  @Input()
  modelProduct!: Product;

  @Output()
  submitValues: EventEmitter<Product> = new EventEmitter<Product>();


  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });

    if(this.modelProduct !== undefined){
      this.formProduct.patchValue(this.modelProduct);
    }
  }

  onSubmit():void {
    this.submitValues.emit(this.formProduct.value);
  }
}
