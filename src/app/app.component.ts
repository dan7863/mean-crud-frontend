import { Component, OnInit } from '@angular/core';
import { CrudService } from './services/crud.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private crudService:CrudService){

  }

  ngOnInit(): void{
  }
}
