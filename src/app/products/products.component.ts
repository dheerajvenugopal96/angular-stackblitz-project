import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title: string = 'PRODUCT LIST';
  Products: IProduct[];
  showImage: boolean = true;
  ratingMessage: string = '';
  _listFilter: string = '';
  filteredProducts: IProduct[];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.filterProducts(this.listFilter)
      : this.Products;
  }

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe((data) => {
      this.Products = data;
      this.filteredProducts = data;
    });
  }

  toggleImageButton() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(event) {
    this.ratingMessage = event;
  }

  filterProducts(listfilter: string): IProduct[] {
    let filterBy = listfilter.toLocaleLowerCase();
    return this.Products.filter(
      (pro: IProduct) =>
        pro.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
