import { Component, OnInit } from '@angular/core';
import { Purchase } from '../shared/purchase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AssetService } from '../shared/asset.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  purchases: Observable<Purchase[]>;
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router, private service: AssetService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.purchases = this.service.getAssetOrders();
  }

  Logout() {
    this.authService.isLoggedOut();

    this.router.navigateByUrl('login');
  }

}
