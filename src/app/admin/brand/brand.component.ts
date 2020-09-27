import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  txtbrand:any;
  tmp:number=0;
  data:any;
  constructor(private service:CommonService) { 
    this.funGet();
  }

  ngOnInit() {
    this.funGet();
  }
  funGet(){
    if(this.service.brandData==null){
      this.service.serGetBrand().subscribe((dt:any)=>{
        this.data=dt;
      })
    }else{
      this.service.brandData=this.data;
    }
  }
  funInsBrand(){
   var obj={brandname:this.txtbrand,active:1}
   this.service.serInsertBrand(obj).subscribe((dt:any)=>{
     alert(dt.result)
     this.service.brandData=null;
     this.funGet();
   })

  }
////////////////////////////////////
divName:any;
divBrand:any;
  update(data){
      this.tmp=data._id;
       this.divName=data.brandname;
       this.divBrand=data.active;
  }

  funBrandSave(){
    var obj={id:this.tmp,brandname:this.divName,active:this.divBrand};
    console.log(obj);
    this.service.serBrandUpdate(obj).subscribe((dt:any)=>{
      alert(dt.result);
      this.tmp=0;
      this.service.brandData=null;
      this.funGet();
    })
  }

   
  funBrandClose(){
    this.tmp=0;
  }
}
