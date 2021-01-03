import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ConvertToSpaces } from '../shared/convertToSpaces.pipe';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';

@NgModule({
  declarations: [
    ConvertToSpaces,
    ProductDetailComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductsComponent },
      { path: ':id', component: ProductDetailComponent },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: ProductEditInfoComponent },
          { path: 'tags', component: ProductEditTagsComponent },
        ],
      },
    ]),
    SharedModule,
  ],
  exports: [ConvertToSpaces, SharedModule],
})
export class ProductModule {}
