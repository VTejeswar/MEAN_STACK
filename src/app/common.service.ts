import { Injectable } from '@angular/core';
import { Settings } from './settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  settings=new Settings()
  constructor(private http:HttpClient) { }
  serGetCategory(){

    return this.http.get(`${this.settings.server_path}/catpath/getCategory`)
    
    }

    serGetSubCat(){
      return this.http.get(`${this.settings.server_path}/subcatpath/getsubcat`)
    }

    serGetSubSubCat(){
      return this.http.get(`${this.settings.server_path}/subsubcatpath/getSubSubcat`)
    }
}
