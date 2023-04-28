import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService, product } from 'src/app/services/crud.service';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent {
  
  allproducts=this.ser.products
  data!:product

  constructor(private route: ActivatedRoute, private ser:CrudService)
  {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) =>{
     let res = this.allproducts.find(x=>x.id==params.id)
      if(res!=null)
      {
        this.data=res
      }
    })
  }
}
