import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../emitter.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admincommon',
  templateUrl: './admincommon.component.html',
  styleUrls: ['./admincommon.component.css']
})
export class AdmincommonComponent implements OnInit {
  log_message:any=""
  constructor(private emits:EmitterService,private service:CommonService) { 
    this.emits.mymessageevent.subscribe(dt=>{
      this.log_message=(dt.message)
      setTimeout(()=>{
        this.log_message=""
      },3000)
    })
  }

  ngOnInit() {
  }

}
   