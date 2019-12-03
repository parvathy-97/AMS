import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '../shared/asset.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Assetdef } from '../shared/assetdef';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype';
import { Vendor } from '../shared/vendor.model';
import { Purchase } from '../shared/purchase';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss']
})
export class PurchaseOrderListComponent implements OnInit {
  assetdefs: Observable<Assetdef[]>;
  assettype: Observable<Assettype[]>;
  vendors: Observable<Vendor[]>;
  purchase:Purchase=new Purchase();
  purchases:Observable<Purchase[]>;

  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(private route:Router,private service :AssetService,private authservice:AuthService,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    this.purchases= this.service.getPurchaseList();
    this.assettype=this.service.getAssetTypeList();
    this.assetdefs=this.service.getAssetList();
    this.vendors=this.service.getVendorList();
  }


  logout() {
    this.authservice.isLoggedOut();
    this.route.navigateByUrl('login');

  }
  deleteOrder(id: number) {
    this.service.deleteOrder(id).subscribe(data => {
      console.log(data);
      this.toastr.error( "Deleted successfully");
      this.reloadData();
    })

  }
}
