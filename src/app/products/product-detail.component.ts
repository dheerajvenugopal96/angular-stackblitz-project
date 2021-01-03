import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { IProduct } from './products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: IProduct;
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this._productService
      .getProductForId(this.id)
      .subscribe((data) => (this.product = data));
  }

  goBack() {
    this._router.navigate(['/productList']);
  }
}
