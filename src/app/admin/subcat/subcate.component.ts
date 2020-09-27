import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-subcate',
  templateUrl: './subcate.component.html',
  styleUrls: ['./subcate.component.css']
})
export class SubcateComponent {
  
  cat_data:any;   
  subcat_data:any;

  /////// INPUT FIELDS ////////
  txtsubcat:any;
  drpsubcat:any;

  //////// PAGINATION  ////////
  cp:number=1
  constructor(private ser:CommonService, private emits:EmitterService) { 
 
      this.getSubCategory()
      if(this.ser.ser_cat_data==null){
        this.ser.serGetCaterory().subscribe(dt=>{
          this.cat_data=dt
        })
      }
        else{
          this.cat_data=ser.ser_cat_data
        }
   
}   
///////////// GET SUB_CAT ///////////////
getSubCategory(){
  if(this.ser.ser_subcat_data==null)
  {
    this.ser.serGetSubCat().subscribe(dt=>{
      this.subcat_data=dt
     })
  }
  else  
 this.subcat_data=this.ser.ser_subcat_data;
 }
///////////// INSERT SUB_CAT ///////////////
InSubCat(){
  var obj={ subcatname:this.txtsubcat,catid:this.drpsubcat}
  console.log(obj)
  this.ser.serInsertSubCat(obj).subscribe((dt:any)=>{
      this.emits.mymessageevent.emit({message:dt.result})
    this.ser.ser_subcat_data=null;
    this.getSubCategory();
  })
  

} 
//////////////////////// UPDATE SUBCATE ////////////////////////

        tmp:number=0
        tsubcat:any;
        drpcatt:any;
        Editsubcat(current_row){
          this.tmp=current_row._id;   
          this.tsubcat=current_row.subcatname;
          this.drpcatt=current_row.catid;
        }
            Updatesubcat(){
              var obj={id:this.tmp,subcatname:this.tsubcat,catid:this.drpcatt}
              this.ser.serUpdateSubCat(obj).subscribe((dt:any)=>{
                this.emits.mymessageevent.emit({message:dt.result})
                console.log(dt.result)
                this.tmp=0;
                this.ser.ser_subcat_data=null;
                this.getSubCategory();
              })
            }   
            Cancelsubcat(){
              this.tmp=0
            } 

             
}  




