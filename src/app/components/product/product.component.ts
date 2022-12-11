import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product1 = {
    productId: 1,
    productName: 'Cüzdan',
    categoryId: 1,
    unitPrice: 5,
  };
  product2 = {
    productId: 2,
    productName: 'Şarj Aleti',
    categoryId: 2,
    unitPrice: 100,
  };
  product3 = {
    productId: 3,
    productName: 'Telefon',
    categoryId: 1,
    unitPrice: 30,
  };
  product4 = {
    productId: 4,
    productName: 'Gözlük',
    categoryId: 4,
    unitPrice: 90,
  };

  products = [this.product1, this.product2, this.product3, this.product4];
}
