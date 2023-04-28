import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { ProductdataComponent } from './products/productdetails/productdata/productdata.component';

const routes: Routes = [
  {path: 'products/:id', component:ProductdetailsComponent,children:[
    {path: 'spec/:id', component:ProductdataComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
