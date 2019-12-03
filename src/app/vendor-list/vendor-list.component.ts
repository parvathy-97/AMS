import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetService } from '../shared/asset.service';
import { AuthService } from '../auth.service';
import { Assettype } from '../shared/assettype';
import { Observable } from 'rxjs';
import { Vendor } from '../shared/vendor.model';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  vendors: Observable<Vendor[]>;
  assettype: Observable<Assettype[]>;

  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(private router: Router, private toastr: ToastrService, private service: AssetService, public authservice: AuthService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.vendors = this.service.getVendorList();
  }
  deleteVendor(id: number) {
    this.service.deleteVendor(id).subscribe(data => {
      console.log(data);
      this.toastr.error('Oops!', 'Deleted successfully');
    })

  }
  logout() {
    this.authservice.isLoggedOut();
    this.router.navigateByUrl('login');
  }
}
