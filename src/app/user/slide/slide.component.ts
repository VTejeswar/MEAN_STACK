import { Component, OnInit } from '@angular/core';
declare var $:any
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  slider_data:any
  constructor(private service:UsercommonService) { 
    this.get()
  }

  ngOnInit() {
  }
    get(){
      this.service.ser_slide().subscribe((dt:any)=>{
        this.slider_data=dt;
      })
    }
    left(){
      // var l=<HTMLDivElement>document.getElementById('DIVINNER1');
      // $(l).animate({left:'-300px'},1000)
      var r=<HTMLDivElement>document.getElementById('DIVINNER1');
      $(r).animate({left:'0px'},1000)
    }
    right(){
      var l=<HTMLDivElement>document.getElementById('DIVINNER1');
      $(l).animate({left:'-320px'},1000)
      // var r=<HTMLDivElement>document.getElementById('DIVINNER1');
      // $(r).animate({left:'0px'},1000)
    }
}
