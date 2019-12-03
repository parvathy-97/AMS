import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchasemanagerComponent } from './purchasemanager/purchasemanager.component';
import { AssetmasterComponent } from './assetmaster/assetmaster.component';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { AssetmasterEditComponent } from './assetmaster-edit/assetmaster-edit.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    AssetAddComponent,
    AssetListComponent,
    AssetEditComponent,
    VendorAddComponent,
    VendorEditComponent,
    VendorListComponent,
    PurchaseEditComponent,
    PurchaseOrderListComponent,
    PurchaseOrderComponent,
    PurchasemanagerComponent,
    AssetmasterComponent,
    AssetmasterListComponent,
    AssetmasterEditComponent,
    OrderListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' 

    }), NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
