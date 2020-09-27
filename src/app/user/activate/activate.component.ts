import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:UsercommonService) {
    this.ac.params.subscribe(dt=>{
      alert(dt.em)
      this.service.active_mail({mail:dt.em}).subscribe((dt:any)=>{
        alert("sabrisah"+dt.result);


      }) 
    })
   }

  ngOnInit() {
  }

}
 