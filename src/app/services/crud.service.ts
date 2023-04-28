import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  products=[
    {id:1,name:'Memory Card',price:500,quantity:'100'},
    {id:2,name:'Pen Drive',price:750,quantity:'10'},
    {id:3,name:'Power Bank',price:100,quantity:'5'}
  ]
  constructor() { }
}
export interface product{
  id:number,
  name:string,
  price:number,
  quantity:string
}