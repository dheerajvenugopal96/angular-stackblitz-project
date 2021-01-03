import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, filter, map } from 'rxjs/operators';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productApi = '../../api/products.json';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productApi);
  }

  getProductForId(id: number): Observable<IProduct> {
    return this.getProducts().pipe(
      map((pro: IProduct[]) => pro.find((p) => p.productId == id))
    );
  }
}
