import { Injectable } from '@angular/core';
import { Assetdef } from './assetdef';
import { Assettype } from './assettype';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from './vendor.model';
import { Purchase } from './purchase';
import { Assetmaster } from './assetmaster';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  assetdef: Assetdef;
  assettype: Assettype;
  purchase: Purchase;

  constructor(private http: HttpClient) { }

  getAsset(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDefinitions/' + id);
  }
  getAssetList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDefinitions');
  }

  getAssetType(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetTypes/' + id);
  }

  getAssetTypeList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetTypes');
  }
  addAsset(assetdef: Assetdef) {
    return this.http.post(environment.baseUrl + '/AssetDefinitions', assetdef);
  }

  deleteAsset(id: number) {
    return this.http.delete(environment.baseUrl + '/AssetDefinitions/' + id);
  }

  updateAsset(assetId: number, asset: Assetdef) {
    return this.http.put(environment.baseUrl + '/AssetDefinitions/' + assetId, asset);
  }

  searchAsset(name: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDefinitions?name=' + name);
  }

  getVendor(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/Vendors/' + id);
  }

  getVendorList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/Vendors');
  }

  addVendor(vendor: Vendor) {
    return this.http.post(environment.baseUrl + '/Vendors', vendor);
  }

  deleteVendor(vendorId: number) {
    return this.http.delete(environment.baseUrl + '/Vendors/' + vendorId);
  }
  updateVendor(id: number, vendor: Vendor) {
    return this.http.put(environment.baseUrl + '/Vendors/' + id, vendor);
  }
  getPurchaseList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/Purchases');
  }

  getPurchase(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/Purchases?iid=' + id);
  }

  placeOrder(purchase: Purchase) {
    return this.http.post(environment.baseUrl + '/Purchases', purchase);
  }

  updateOrder(id: number, purchase: Purchase) {
    return this.http.put(environment.baseUrl + '/Purchases/' + id, purchase);
  }

  searchAssettype(name: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/Purchases?name=' + name);
  }

  searchVendor(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/Purchases/' + id);
  }

  deleteOrder(purchaseId: number) {
    return this.http.delete(environment.baseUrl + '/Purchases/' + purchaseId);
  }



  getAssetOrders(): Observable<any> {
    return this.http.get(environment.baseUrl + '/Order');
  }

  getAssetOrder(id: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/Order?ordno=' + id);
  }

  postAsset(asset: Assetmaster) {
    return this.http.post(environment.baseUrl + '/AssetMasters', asset);
  }

  updatePurchase(id: number, purchase: Purchase): Observable<any> {
    return this.http.put(environment.baseUrl + '/AssetMasters/' + id, purchase);
  }

  getMasterList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetMasters');
  }

}
