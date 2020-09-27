import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:CommonService) {
    this.service.login_check=false;
    // localStorage.clear()
    localStorage.removeItem('ADMINAUTH')
    
   }

  ngOnInit() {
  }

}
