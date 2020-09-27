import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { CommonService } from 'src/app/common.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements  OnInit {
  var_category:any; 
  var_subcat:any; 
  var_subsubcat:any;
  constructor(private  service:CommonService) {
    this.service.serGetCategory().subscribe(dt=>{
      this.var_category=dt;
    })
    this.service.serGetSubCat().subscribe(dt=>{
      this.var_subcat=dt
    })
    this.service.serGetSubSubCat().subscribe(dt=>{
      this.var_subsubcat=dt
    })
    
  
    $(document).ready(function() {
      $('.navbar-light .dmenu').hover(function () {
              $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
          }, function () {
              $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
          });
      }); 
       
          $(document).ready(function() {
        $(".megamenu").on("click", function(e) {
          e.stopPropagation();
        });
      });
   }

  ngOnInit() {
   
  }


}