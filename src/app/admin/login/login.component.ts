import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { ValidationForm } from '../../../app/validation-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtuname:any="";txtpwd:any="";
  validation:ValidationForm=new ValidationForm()
  constructor(private service:CommonService,private rt:Router) {
      if(localStorage.getItem("adminauth"))
      {
              var tok_data=localStorage.getItem("adminauth") 
              var decodedata=decode(tok_data)
              if(decodedata.auth==1)
              { 
                  this.service.login_check=true;
                  this.rt.navigateByUrl('admin/welcome')
              }else{
                // local storage is there but auth is not there
              } 
      }else{
        // no action 
      }
   }  
    
  ngOnInit() { 
  } 
  login(){
    if(this.validation.myform.valid){
    var obj={uname:this.validation.myform.controls.uname.value,
               pwd:this.validation.myform.controls.pwd.value}
    this.service.setAuth(obj).subscribe(( dt:any)=>{
      if(dt.login=="Success"){    
        this.service.login_check=true;
        localStorage.setItem("adminauth",dt.data)
       if(localStorage.getItem("cat")){
         this.rt.navigateByUrl("admin/cat") 
       }else if(localStorage.getItem("subcat")){
         this.rt.navigateByUrl("admin/subcat")
       }else if(localStorage.getItem("subsubcat")){
         this.rt.navigateByUrl("admin/subsubcat");
       }else if(localStorage.getItem("brand")){
         this.rt.navigateByUrl("admin/brand")
       }else if(localStorage.getItem("product")){
         this.rt.navigateByUrl("admin/product")
       }else if(localStorage.getItem("dailyorders")){
         this.rt.navigateByUrl("admin/dailyorders")
       }else{
         this.rt.navigateByUrl("admin/welcome");
       }
      }else{
        alert("Invalid uname/pwd")
      }
      })
  
  }  
} 
}   
      