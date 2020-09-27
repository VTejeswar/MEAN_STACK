import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-cate',
  templateUrl: './cate.component.html',
  styleUrls: ['./cate.component.css']
})
export class CateComponent {
 

  data_category:any;  
  txtcat:any;
  tmp:any=0;
      // elsediv
      divcat:any;
      drpActive:any;
          // PAGINATION
          cp:number=1
  constructor(private service:CommonService, private emits:EmitterService) {    
    this.getCategory()
   }

   getCategory(){
    if(this.service.ser_cat_data==null)
    {
   this.service.serGetCaterory().subscribe(dt=>{
    this.data_category=dt   
   })
  }  
  else
  {
    this.data_category=this.service.ser_cat_data
  }
  }

  /// Function to insert category
  funInsCat(){
    var obj={catname:this.txtcat,active:1}
    console.log(obj)
    this.service.serInsertCat(obj).subscribe((dt:any)=>{
    this.emits.mymessageevent.emit({message:dt.result})
      this.service.ser_cat_data=null
      this.getCategory()
    })

  }       
/// Function to Update category
  funUpdate(data_category){

      this.tmp=data_category._id
      this.divcat=data_category.catname
      this.drpActive=data_category.active
  }
        funCatSave(){
          var updated_obj={id:this.tmp,catname:this.divcat,active:this.drpActive}

          
          this.service.serUpdatedCategory(updated_obj).subscribe((dt:any)=>{
           this.emits.mymessageevent.emit({message:dt.result})
          
         this.tmp=0
         this.service.ser_cat_data=null
         this.getCategory()
          })
        } 
        funCatClose(){
          this.tmp=0
        }
          // skils=new FormArray([])
          // // addSkil(){
          // //   this.skils.push(new FormControl(''));
            
          // // }
          // remove(i){
          //   this.skils.removeAt(i);
          // }

          // addSkil(){
          //   var xx=new FormGroup({
          //     level:new FormControl(''),
          //     name:new FormControl('')

          //   })
          //   this.skils.push(xx)
          // }
   
         public form:any;
        ngOnInit(){
          this.form=new FormGroup({
            name: new FormControl(),
            contact:new FormArray([
              new FormControl('123'),
              new FormControl('456')
            ])
          })
        }
        Submit(){
// console.log(this.form.get('contact').value)
            console.log(this.form.value)
        }
        add(){
            this.form.get('contact').push(new FormControl());
        }
}

