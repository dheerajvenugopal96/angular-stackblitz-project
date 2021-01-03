import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductsComponent } from "./products/products.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./login/auth.guard";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  {
    path: "productList",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./products/product.module").then(m => m.ProductModule)
  },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", redirectTo: "welcome", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [WelcomeComponent, ProductsComponent];
