import { HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from '../cart-item.service';

import { EmitterService } from '../emitter.service';
import { UsercommonService } from '../usercommon.service';
// import $ from 'jquery'
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
totalcart_item:any;

  constructor(private emits:EmitterService,
              private cartitem:CartItemService,
              private service:UsercommonService,
              private rt:Router) { 
    emits.myevent.subscribe((dt:any)=>{ 
      $('#modals1').modal('show') 
  })
  this.cartitem.current_value.subscribe((dt)=>{
    this.totalcart_item=dt
  })

 
  }
  
  ngOnInit() {  
  this.off()
  }
  txtsearch:any;
  off(){
    this.div=false
    // alert('hi',e)
  }
  funsearch(){
    if(this.txtsearch.length>0){
      this.div=true
    }else
    {
      this.div=false
    }
  this.service.ser_search({txt:this.txtsearch}).subscribe((dt:any)=>{
        this.search_Data=dt;
    })
  
  }
  div:boolean=false;
  search_Data:any;
  goto_Product(obj){
    // user/prodinfo;oid
    this.div=false
      this.rt.navigate(['user/prodinfo',{oid:obj._id}])
  }
}    
// $('#myModal1').modal('show')
// $('#modals1').modal('show')