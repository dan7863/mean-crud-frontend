import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  id!: any;
  model!: Product;

  constructor(private crudService: CrudService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private alertifyService: AlertifyService){
    
  }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getProduct(this.id).subscribe((res) => {
      this.model = {
        _id: res._id,
        description: res.description,
        price: res.price,
        stock: res.stock
      }
    });
  }

  onSubmit(product: Product){
    this.crudService.updateProduct(this.id, product).subscribe({
      next: () => {
        this.alertifyService.alert('¡Updated Product!');
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.alertifyService.error(error);
      }
    })
  }
}
