import { Component } from '@angular/core';
import { products } from 'src/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;

  share = () => {
    alert("he product has been shared!");
  };

  onNotify(){
    alert("You will be notified when the product goes on sale");
  };
  
}
