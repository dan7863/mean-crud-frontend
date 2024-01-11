import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(
    private router: Router,
    private crudService: CrudService,
    private alertifyService: AlertifyService
  ){

  }

  onSubmit(product:Product){
    this.crudService.createProduct(product).subscribe({
      next:() => {
        this.alertifyService.success('¡Added product!');
        this.router.navigateByUrl("/")
      },
      error: (error) => {
        this.alertifyService.error(error);
      }
    })
  }
}
