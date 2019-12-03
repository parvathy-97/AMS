import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AdminComponent } from './admin/admin.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { AuthGuard } from './auth.guard';
import { PurchasemanagerComponent } from './purchasemanager/purchasemanager.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { AssetmasterComponent } from './assetmaster/assetmaster.component';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'list', component: AssetListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AssetAddComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AssetEditComponent, canActivate: [AuthGuard] },
  { path: 'vendor', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'vendoradd', component: VendorAddComponent, canActivate: [AuthGuard] },
  { path: 'vendorlist', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'vedit/:id', component: VendorEditComponent, canActivate: [AuthGuard] },
  { path: 'purchasemanager', component: PurchasemanagerComponent, canActivate: [AuthGuard] },
  { path: 'orderlist', component: PurchaseOrderListComponent, canActivate: [AuthGuard] },
  { path: 'placeorder', component: PurchaseOrderComponent, canActivate: [AuthGuard] },
  { path: 'editorder/:id', component: PurchaseEditComponent, canActivate: [AuthGuard] },
  { path: 'masterorderlist', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'masterlist', component: AssetmasterListComponent, canActivate: [AuthGuard] },
  { path: 'assetmaster/:id', component: AssetmasterComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
