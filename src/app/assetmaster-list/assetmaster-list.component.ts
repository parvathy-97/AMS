import { Component, OnInit } from '@angular/core';
import { Assetmaster } from '../shared/assetmaster';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AssetService } from '../shared/asset.service';

@Component({
  selector: 'app-assetmaster-list',
  templateUrl: './assetmaster-list.component.html',
  styleUrls: ['./assetmaster-list.component.scss']
})
export class AssetmasterListComponent implements OnInit {
masters:Observable<Assetmaster[]>;
  constructor(private authService:AuthService,private router:Router,private service:AssetService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData()
  {
    this.masters=this.service.getMasterList();
  }
  logout(){
    this.authService.isLoggedOut();
    this.router.navigateByUrl('login');
  }


}
