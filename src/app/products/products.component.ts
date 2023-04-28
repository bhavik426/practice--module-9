import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  classes='border w-25 text-center'
  list=this.ser.products

  constructor(private ser:CrudService)
  {

  }

}
