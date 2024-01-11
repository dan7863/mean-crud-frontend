import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from '../../services/crud.service';
import { Product } from '../../models/product.model';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{
  faPlus = faPlus;
  faPen = faPen;
  faTrash = faTrash;

  products: Product[] = [];
  constructor(private crudService: CrudService, private alertifyService: AlertifyService){

  }

  ngOnInit(): void{
    this.crudService.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  delete(id:any, index:any){
    this.alertifyService.confirm({
      message: '¿Are you sure to delete the Product?',
      callback_delete: () => {
        this.crudService.deleteProduct(id).subscribe((res) => {
          this.products.splice(index, 1);
        });
      }
    });
  }
}
