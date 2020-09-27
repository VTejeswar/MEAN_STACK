 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItemService } from '../cart-item.service';
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-prodinfo',
  templateUrl: './prodinfo.component.html',
  styleUrls: ['./prodinfo.component.css']
})
export class ProdinfoComponent implements OnInit {
  prodinfo:any;
  prodinfo_data:any;
  imgbig:any;
  all_offers:any; 
  div:any;
  curvalue:any;
  constructor(private ac:ActivatedRoute,
              private service:UsercommonService,
              private rt:Router,
              private itemservice:CartItemService) {
                this.itemservice.current_value.subscribe((dt)=>{
                  this.curvalue=dt;
                })

    this.ac.params.subscribe(dt=>{
      this.prodinfo=dt.oid
      // alert(this.prodinfo)
      this.service.ser_get_prodinfo({x:this.prodinfo}).subscribe((dt:any)=>{
   
          this.prodinfo_data=dt;
          this.imgbig=dt[0].Image[0]
          this.all_offers=dt[0].Offer.split(',');
          console.log(this.prodinfo_data);
        
      
         
      })
    })
   }

  ngOnInit() {
  }
  funaddtocart(prodinfo){
      var arr:any[]=[];
      if(localStorage.getItem('product'))
      {
        var exist=0;
        var all_products=localStorage.getItem('product');  
        var objects = JSON.parse(all_products);
                   for(let i=0; i<objects.length;i++)
                   {
                    if(objects[i]._id==prodinfo._id)
                    {
                      objects[i].uqty=objects[i].uqty+1
                      exist++
                    }
                   }
                        if(exist==0)
                        {
                          prodinfo.uqty=1
                          objects.push(prodinfo)
                          this.curvalue++
                          this.itemservice.funnext(this.curvalue)
                        }
                        localStorage.setItem('product',JSON.stringify(objects))
                        this.rt.navigateByUrl('user/cart');
        }                
        else    
        {
        prodinfo.uqty=1;
        var str=prodinfo;
        arr.push(str)
        localStorage.setItem('product',JSON.stringify(arr));
        this.rt.navigateByUrl('user/cart');
        console.log(arr)
     
       }

  }
}
