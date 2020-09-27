import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Settings } from '../settings';
//map function is used to combine multiple functions
import {map} from "rxjs/operators"
import {pipe} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class CommonService {
    settingss:any;
    ser_cat_data:any;
    ser_subcat_data:any;
    ser_subsubcat_data:any;
    ser_product_data:any;
    login_check:boolean=false;
  constructor(private http:HttpClient) {     
      this.settingss=new Settings()  
      if(localStorage.getItem("adminauth")){
        this.login_check=true;
      }
  }
  /////////////////////////    CATEGORY  ////////////////////////////////////////
   serGetCaterory(){
  return this.http.get(`${this.settingss.server_path}/catpath/getCategory`).pipe(map(dt=>{
    this.ser_cat_data=dt                          
    return dt;
  }))

  }     

  serInsertCat(catdata){
    return this.http.post(`${this.settingss.server_path}/catpath/insertCategory`,catdata)
   }

   serUpdatedCategory(obj){
      return this.http.put(`${this.settingss.server_path}/catpath/updateCategory`,obj)
   }




   ///////////////////////////  SUBCAT ////////////////////////////////

   serGetSubCat(){
    return this.http.get(`${this.settingss.server_path}/subcatpath/getSubCat`).pipe(map(dt=>{
      this.ser_subcat_data=dt                                     
      return dt
    }))
  }

  serInsertSubCat(obj){
   return this.http.post(`${this.settingss.server_path}/subcatpath/insertSubCat`,obj)
  }




  serUpdateSubCat(obj){
      return this.http.put(`${this.settingss.server_path}/subcatpath/UpdateSubCat`,obj)
  }



  //////////////////////////////  SUBSUBCAT    ////////////////////////////////////////
  
  serGetSubSubCat(){
    return this.http.get(`${this.settingss.server_path}/subsubcatpath/getSubSubCat`).pipe(map(dt=>{
        this.ser_subsubcat_data=dt;      
        return dt             
    }))
  }

  serInsertSubSubCat(obj){
      return this.http.post(`${this.settingss.server_path}/subsubcatpath/insertSubSubCat`,obj)
  }


  serUpdateSubSubCat(obj){
    return this.http.put(`${this.settingss.server_path}/subsubcatpath/updateSubSubCat`,obj)
  }

  setAuth(obj){
    return this.http.post(`${this.settingss.server_path}/adminpath/admin`,obj)
  }



  ////////////////////// BRAND /////////////////////
  brandData:any;
    serGetBrand(){
      return this.http.get(`${this.settingss.server_path}/brandpath/get`).pipe(map(dt=>{
          this.brandData=dt;
          return dt;     
      }))
    }

    serInsertBrand(obj){
      return this.http.post(`${this.settingss.server_path}/brandpath/insert`,obj)
    }

    serBrandUpdate(obj){
      return this.http.put(`${this.settingss.server_path}/brandpath/update`,obj)
    }



    /////////////////// PRODUCT ////////////////////////
    serInsertProduct(obj){
      return this.http.post(`${this.settingss.server_path}/productpath/insert`,obj)
    }

   serGetProduct(){
     return  this.http.get(`${this.settingss.server_path}/productpath/get`)
   }
}      


