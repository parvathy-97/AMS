import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '../shared/asset.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Purchase } from '../shared/purchase';
import { Assetdef } from '../shared/assetdef';
import { Assettype } from '../shared/assettype';
import { Vendor } from '../shared/vendor.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.scss']
})
export class PurchaseEditComponent implements OnInit {
  purchaseForm: FormGroup;
  purchase: Purchase = new Purchase();
  Purchases: Observable<Purchase[]>;
  assetdefs: Observable<Assetdef[]>;
  assettype: Observable<Assettype[]>;
  vendors: Observable<Vendor[]>;
  id: number;
  ad_id: number;
  at_id: number;
  vd_id: number;

  constructor(private router: ActivatedRoute, private formbuilder: FormBuilder, private route: Router, private service: AssetService, private authservice: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.purchaseForm = this.formbuilder.group({
      purchaseId: 'null',
      purchaseOrderNo: ['', [Validators.required]],
      assetName: ['', [Validators.required]],
      assetType: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      vendorName: ['', [Validators.required]],
      purchaseDateStr: ['', [Validators.required]],
      purchaseDelivDateStr: ['', [Validators.required]],
      purchaseStatus: ['', [Validators.required]]
    });
    this.id = this.router.snapshot.params["id"];
    this.service.getPurchase(this.id).subscribe(data => {
      this.purchase = data;
    });
  }
  getformControls() {
    return this.purchaseForm.controls;
  }

  updateOrder() {
    this.purchase.purchaseId = this.id;
    this.purchase.purchaseOrderNo = this.purchaseForm.controls.purchaseOrderNo.value;
    this.purchase.purchaseAssetName = this.purchaseForm.controls.assetName.value;
    this.purchase.purchaseAssetType = this.purchaseForm.controls.assetType.value;
    this.purchase.quantity = this.purchaseForm.controls.quantity.value;
    this.purchase.purchaseVendorName = this.purchaseForm.controls.vendorName.value;
    this.purchase.purchaseDate = this.purchaseForm.controls.purchaseDateStr.value;
    this.purchase.purchaseDelivDate = this.purchaseForm.controls.purchaseDelivDateStr.value;
    this.purchase.purchaseStatus = this.purchaseForm.controls.purchaseStatus.value;
    this.service.updateOrder(this.id, this.purchase).subscribe();
    this.toastr.success('Order details updated successfully');
    this.route.navigateByUrl('orderlist');

  }
  logout() {
    this.authservice.isLoggedOut();
    this.route.navigateByUrl('login');
  }

}
