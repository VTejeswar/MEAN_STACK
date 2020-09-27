import { Injectable } from '@angular/core';
import { Settings } from '../settings';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsercommonService {
  settingss:any;
  constructor(private http:HttpClient) {
    this.settingss=new Settings()  
   }
   ser_get_product_subsubid(obj){
   return this.http.post(`${this.settingss.server_path}/productpath/getproductdata`,obj)
   }
   ser_get_prodinfo(obj){
    return this.http.post(`${this.settingss.server_path}/productpath/getprodinfo`,obj)
   }
 


   registration(obj){
     return this.http.post(`${this.settingss.server_path}/reg/userRegistration`,obj)
   }
   login(obj){
     return this.http.post(`${this.settingss.server_path}/reg/checkuser`,obj)
   }



   ///////////////////// USER_DATA_PRODUCTS ///////////////////////
   storeUserdata(data){
      return this.http.post(`${this.settingss.server_path}/user/userInsr`,data);
   }
 ///////////////////// SLIDE_DATA_PRODUCTS ///////////////////////

 ser_slide(){
  return this.http.get(`${this.settingss.server_path}/slide/slidedata`)
 }

 ser_getproduct_slide(x){
   return this.http.post(`${this.settingss.server_path}/productpath/getprodinfo_slide`,x)
 }
 ser_search(obj){
   return this.http.post(`${this.settingss.server_path}/productpath/search`,obj)
 }

 active_mail(obj){
  return this.http.post(`${this.settingss.server_path}/reg/update_mail`,obj);
 }
}

  

    