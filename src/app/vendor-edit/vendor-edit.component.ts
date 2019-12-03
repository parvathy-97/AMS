import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Assettype } from '../shared/assettype';
import { Vendor } from '../shared/vendor.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../shared/asset.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor;
  vendorForm: FormGroup;
  assettypes: Observable<Assettype[]>;
  id: any
  constructor(private service: AssetService, private route: ActivatedRoute, private toastr: ToastrService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params["id"];
    this.vendorForm = this.formBuilder.group({
      vendorId:null,
      vendorName: ['', Validators.compose([Validators.required])],
      vendorType: 'Supplier',
      vendorAssetType: ['', Validators.compose([Validators.required])],
      validFrom: ['', Validators.compose([Validators.required])],
      vaildTo: ['', Validators.compose([Validators.required])],
      vendorAddress: ['', Validators.compose([Validators.required])]
    });
    this.assettypes = this.service.getAssetTypeList();
    this.service.getVendor(this.id).subscribe(data=>{
      this.vendor=data;
    });
  }
  getformControls() {
    return this.vendorForm.controls;
  }

  updateVendor() {
    this.vendor.vendorId = this.id;
    this.vendor.vendorName = this.vendorForm.controls.vendorName.value;
    this.vendor.vendorType = this.vendorForm.controls.vendorType.value;
    this.vendor.vendorAssetType = this.vendorForm.controls.vendorAssetType.value;
    this.vendor.validFrom = this.vendorForm.controls.validFrom.value;
    this.vendor.vaildTo = this.vendorForm.controls.vaildTo.value;
    this.vendor.vendorAddress = this.vendorForm.controls.vendorAddress.value;
    this.service.updateVendor(this.id, this.vendor).subscribe();
      this.toastr.success('Vendor details updated successfully');
      this.router.navigateByUrl('/vendorlist');
   
  }
}
