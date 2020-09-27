import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ValidationForm } from 'src/app/validation-form';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-produccts',
  templateUrl: './produccts.component.html',
  styleUrls: ['./produccts.component.css']
})
export class ProducctsComponent implements OnInit {
  drpSubcat:any;
  // validation:ValidationForm=new ValidationForm()
  product:FormGroup
  constructor(private service:CommonService) {
    this.getCategory();
    this.getSubCategory();
    this.getSubSubCat();
    this.getProduct();
       }
  ngOnInit() {
    this.getCategory();
    this.getSubCategory();
    this.getSubSubCat();    
       this.product=new FormGroup({
          Brand:new FormControl("",[Validators.required]),
          category:new FormControl("",[Validators.required]),
          subcategory:new FormControl("",[Validators.required]),
          subsubcategory:new FormControl("",[Validators.required]),
       
          Description:new FormControl("",[Validators.required]),
          Colour:new FormControl("",[Validators.required]),
          Rating:new FormControl("",[Validators.required]),
          Offer:new FormControl("",[Validators.required]),
          Newprice:new FormControl("",[Validators.required]),
          Oldprice:new FormControl("",[Validators.required]),
         Size:new FormControl("",[Validators.required]),
          Quantity:new FormControl("",[Validators.required]),
          image:new FormControl("",[Validators.required])
         })
         
  }
  /////////////// CAT DATA  ////////////////
        data_category:any;
        drpCat:any;
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
    /////////////// SUBCAT DATA  ////////////////  
        subcat_data:any;
        
        getSubCategory(){
          if(this.service.ser_subcat_data==null)
          {
            this.service.serGetSubCat().subscribe(dt=>{
              this.subcat_data=dt
            })
          }
          else  
        this.subcat_data=this.service.ser_subcat_data;
        }    
     /////////////// SUBSUBCAT DATA  ////////////////    
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
     funsubmit(){       
         var obj={
          Brand:this.product.controls.Brand.value,
          Category:this.product.controls.category.value,
          Subcategory:this.product.controls.subcategory.value,
          Subsubcategory:this.product.controls.subsubcategory.value, 

          Description:this.product.controls.Description.value,
          Colour:this.product.controls.Colour.value,
          Rating:this.product.controls.Rating.value,
          Offer:this.product.controls.Offer.value,
          Newprice:this.product.controls.Newprice.value,
          Oldprice:this.product.controls.Oldprice.value,
          Size:this.product.controls.Size.value,
          Quantity:this.product.controls.Quantity.value,
          image:this.product.controls.image.value
        
        }
             console.log(obj);
           
      var fid=<HTMLFormElement>document.getElementById("frm1")
      fid.submit()      
      this.service.serInsertProduct(obj).subscribe((dt:any)=>{
        alert(dt.result);
        console.log(this.product.value); 
        alert(this.product.value)
        this.getProduct();
      })

     }

 
     ProductData:any;
     getProduct(){
       if(this.service.ser_product_data==null){
         this.service.serGetProduct().subscribe((dt:any)=>{
            this.ProductData=dt;
         })
       }else{
         this.service.ser_product_data=this.ProductData;
       }
     }

      columnDefs=[
        {headerName:"Brand",field:"Brand",sortable: true, filter: true},
        {headerName:"Oldprice",field:"Oldprice",sortable: true, filter: true},
        {headerName:"Newprice",field:"Newprice",sortable: true, filter: true},
        {headerName:"Qantity",field:"Quantity",sortable: true, filter: true},
        {headerName:"Rating",field:"Rating",sortable: true, filter: true} 
        ,
        {headerName:"Offer",field:"Offer",sortable: true, filter: true},
        { headerName: 'Image', field: 'Image',sortable: true, filter: true }
       
      ]
        

}
// https://medium.com/@jinalshah999/reactive-forms-in-angular-a46af57c5f36  
 // {field:`<img src="Image" alt="">`,sortable: true, filter: true}