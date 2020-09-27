import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-subsubcate',
  templateUrl: './subsubcate.component.html',
  styleUrls: ['./subsubcate.component.css']
})
export class SubsubcateComponent implements OnInit {
  //// INSERT SUBSUBCATEGORY //////////
  txtsubsubcat:any;
  drpsubsubcat:any;

  ///// SUBCAT_DATA ////////
  subcat_data:any;
  constructor(private service:CommonService, private emits:EmitterService) { 
    this.getsubcat()
    this.getSubSubCat()
  }

  ngOnInit() {
  }
  public getsubcat(){
    if(this.service.ser_subcat_data==null){
      this.service.serGetSubCat().subscribe(dt=>{
        this.subcat_data=dt;
      })
    }
    else {
      this.service.ser_subcat_data=this.subcat_data;
    }
  }
  ///////////////////////////SUBSUBCAT_DATA/////////////////////////////
  
    SubSubCatData:any;
    getSubSubCat(){
      if(this.service.ser_subsubcat_data==null){
        this.service.serGetSubSubCat().subscribe(dt=>{
          this.SubSubCatData=dt;
        })
      }else{
        this.SubSubCatData=this.service.ser_subsubcat_data;
      }
    }
  InSubSubCat(){
   
    var obj={subsubcatname:this.txtsubsubcat,subcatid:this.drpsubsubcat}
    this.service.serInsertSubSubCat(obj).subscribe((dt:any)=>{
       this.emits.mymessageevent.emit({message:dt.result})
      this.txtsubsubcat=null;
      this.drpsubsubcat=null;
      this.service.ser_subsubcat_data=null
      this.getSubSubCat()
    })
    console.log(obj)
     }

     tmp:number=0
     tsubsubcat:any;
     dsubsubcat:any;
     Editsubsubcat(datas){
       this.tmp=datas._id
       this.tsubsubcat=datas.subsubcatname
      this.dsubsubcat=datas.subcatid
     }

     Updatesubsubcat(){
       var obj={id:this.tmp,subsubcatname:this.tsubsubcat,subcatid:this.dsubsubcat}
       this.service.serUpdateSubSubCat(obj).subscribe((dt:any)=>{
         this.emits.mymessageevent.emit({message:dt.result})
         console.log(dt.result)
         this.tmp=0
         this.service.ser_subsubcat_data=null;
         this.getSubSubCat()
       })
     }
     Cancelsubsubcat(){
       this.tmp=0
     }
}
