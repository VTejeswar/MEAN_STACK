import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmitterService } from 'src/app/admin/emitter.service';
import { CartItemService } from '../cart-item.service';

import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  addCartData:any;
  grandtotal:any;
  register:any=false;
  login:any=true;
    logside:any=true;
    regside:any=false;
    currentvalue:any;
  reg(){
      this.register=true
      this.login=false
      this.regside=true
      this.logside=false    
  }
  log(){
    this.register=false
    this.login=true
    this.regside=false
    this.logside=true
  }
  loginForm:any; 
  registrationForm:any;
  registere(){
    if(this.registrationForm.valid){
    var obj={
      name:this.registrationForm.controls.name.value,
      mail:this.registrationForm.controls.mail.value,
      mobile:this.registrationForm.controls.mobile.value,
      password:this.registrationForm.controls.password.value,
      active:0
      
    }
    this.service.registration(obj).subscribe((dt:any)=>{
     
      if(dt.result=='Registration success please activate throug email'){
      
        this.myyevent.mymessageevent.emit({xxx:'Thanq  u became As a Customer of US !!!'})
        this.register=false
        this.login=true
        this.regside=false
        this.logside=true
     
      }
    })  
    console.log(obj) 
  }else{
    this.myyevent.mymessageevent.emit({xxx:'fill the form !!!'})
  }      
  }  

  modalHide:boolean=true;
  logine(){      
     if(this.loginForm.valid){
     var obj={   
      mail:this.loginForm.controls.mailll.value, 
      password:this.loginForm.controls.passs.value
     }                
     var userData={   
      mail:this.loginForm.controls.mailll.value, 
      password:this.loginForm.controls.passs.value,
      cart:localStorage.getItem('product')
     }
     this.service.login(obj).subscribe((dt:any)=>{ 
    //  console.log(dt)    
   console.log("RESULTS",dt.result)
      //   var arr=[]
      // for(var i=0;i<dt.result.length;i++){
      //   arr.push(dt.result[i])
      // } 
      // console.log(arr[0].active,'mobile',arr[0].mobile)       
      // console.log('arr',arr) 
     //result
          //   if(dt.login=="success" && arr[0].active==1){                  
          //   this.myyevent.mymessageevent.emit({xxx:' Successfully Loged'})
          //   this.service.storeUserdata(userData).subscribe((dt:any)=>{              
          //     alert("jjj"+dt.result) 
          //     if(dt.result=="Inserted"){
          //       alert('Removed localStorage');
          //       localStorage.removeItem('product')
          //     }    
          //   })
          //   console.log(userData)           
          // }else{  
          
          //     if(arr[0].active==0) {
          //       this.myyevent.mymessageevent.emit({xxx:'We Sent A Activation Link into ur Mail plz Activate That One'})
          //        }               
          //        else {
          //         // if(arr.length==0)
          //         alert('no')
          //       } 
          //     }   

          if(dt.login=='fail')
          this.myyevent.mymessageevent.emit({xxx:'Create An A/C'})
          else
          {
            var arr=[]
            for(var i=0;i<dt.result.length;i++){
              arr.push(dt.result[i])
            } 
            console.log(arr[0].active,'mobile',arr[0].mobile)       
            console.log('arr',arr) 
               if(arr[0].active==0) {
                this.myyevent.mymessageevent.emit({xxx:'We Sent A Activation Link into ur Mail plz Activate That One'})
                 }               
                 else {
                         
                this.myyevent.mymessageevent.emit({xxx:' Successfully Loged'})
                this.service.storeUserdata(userData).subscribe((dt:any)=>{              
                  alert("jjj"+dt.result) 
                  if(dt.result=="Inserted"){
                    alert('Removed localStorage');
                    localStorage.removeItem('product')
                  }    
                }) 
                console.log(userData)           
                } 
              
          }
     }) 
    }else{
      
      this.myyevent.mymessageevent.emit({xxx:'fill the form !!!'})
    }
  }     
  ngOnInit() {  

    this.registrationForm=new FormGroup ({ 
      name:new FormControl("",[Validators.required]),
      mail:new FormControl("",[Validators.required]),
      mobile:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    })
    this.loginForm=new FormGroup({
      mailll:new FormControl("",[Validators.required]),
      passs:new FormControl("",[Validators.required])
    })
  
  }
  proceedtopay(){
    if(localStorage.getItem('adminauth')){
      
      
      // this.myyevent.myevent.emit()
    }else{
      // this.myyevent.myevent.emit()
    }
    
  }
  gtotal(){
    this.grandtotal=0;
    for(var i=0;i<this.addCartData.length;i++){
      this.grandtotal+=this.addCartData[i].Newprice * this.addCartData[i].uqty;
    }
  }
  log_message:any;
  constructor(private myyevent:EmitterService,
              private rt:Router,
              private service:UsercommonService,
              private cartitem: CartItemService ) { 
   this.addCartData=JSON.parse( localStorage.getItem('product'))
    this.gtotal()
    this.cartitem.current_value.subscribe((dt)=>{
      this.currentvalue=dt;
    })
    this.myyevent.mymessageevent.subscribe(dt=>{
      this.log_message=(dt.xxx)
      setTimeout(()=>{
        this.log_message=""
      },3000)
    })
  }
   
 
  plus(indexx){
    var conid='txt'+ indexx;
  
    var con=<HTMLInputElement>document.getElementById(conid)
   var cval:any=con.value
        if(cval<this.addCartData[indexx].Quantity)
        {
          cval++
        }else{
      
          // this.myyevent.myevent.emit({mesage:'jkjhkj'})
          this.myyevent.mymessageevent.emit({xxx:"No More Quantity !!!!!!!"})
        }
   con.value=cval
   this.addCartData[indexx].uqty=cval;
   localStorage.setItem('product',JSON.stringify(this.addCartData))
   this.gtotal()
  }
  minus(indexx){
    var conid='txt'+ indexx;
      var con=<HTMLInputElement>document.getElementById(conid)
      var cval:any=con.value
      
      if(cval!=1){
        cval--
      }
      
    con.value=cval
    this.addCartData[indexx].uqty=cval;
    localStorage.setItem('product',JSON.stringify(this.addCartData));
    this.gtotal()
  }

  Delete_From_Cart(indexx){
    
    this.myyevent.mymessageevent.emit({xxx:"Removed One Item"})
    this.currentvalue--
    this.cartitem.funnext(this.currentvalue)
    this.addCartData.splice(indexx,1)
    localStorage.setItem('product',JSON.stringify(this.addCartData))
    this.gtotal()
    if(this.addCartData.length==0){
  this.rt.navigateByUrl('user/noproducts')
}
  }
  
}














// funlogin(){
//   // var obj = {username:this.txtusername,password:this.txtpassword}
//   // alert(obj.username);
//   this.userser.ser_get_regdata().subscribe((dt:any)=>{
//     this.userid = dt[0]._id;
//     var demail = dt[0].email
//     var dpwd = dt[0].password
//     if((demail==this.temail)&&(dpwd==this.txtpwd)){
    
//       //alert("login success")
//       $('#modellogin').hide('modal');
     
//       this.funstorelocaldata();
//     }
//     else{
//       alert("Hey Worng email or password ! Enter again")
//     }
//   })
// }
// productid:any=[];quantity:any;
// funstorelocaldata(){
//      var obj = {
//       userid:this.userid,
//       cartDetails:localStorage.getItem('product')
//      }
//      //alert(obj.userid)
//     this.userser.ser_sendCartdata(obj).subscribe((dt:any)=>{
//       alert(dt.result);
//     })
// }

// }
    