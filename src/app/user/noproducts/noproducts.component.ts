import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/admin/emitter.service';

@Component({
  selector: 'app-noproducts',
  templateUrl: './noproducts.component.html',
  styleUrls: ['./noproducts.component.css']
})
export class NoproductsComponent implements OnInit {
  log_messages:any;
  constructor(private emit_message:EmitterService) {
    //subscribe data
    this.emit_message.mymessageevent.subscribe(dt=>{
      this.log_messages=(dt.abc)
      //time interval
      setTimeout(()=>{
        this.log_messages=""
      },3000)
      })

      //displayed message
    this.emit_message.mymessageevent.emit({abc:"Succesfully removed item"})
   }

  ngOnInit() {
  }

}
