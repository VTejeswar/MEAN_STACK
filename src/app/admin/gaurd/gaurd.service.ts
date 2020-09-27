import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { EmitterService } from '../emitter.service';
@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate {

  constructor(private router:Router, private emits:EmitterService) { }
  canActivate(AC:ActivatedRouteSnapshot){
    if(localStorage.getItem("adminauth"))
    {
          var tok_data=localStorage.getItem("adminauth")
          var decodedata=decode(tok_data)
          if(decodedata.auth==1)
          { 
                  if(AC.data.role)
                  {
                        if(AC.data.role==decodedata.role)
                        return true
                        else     
                        {
                          this.emits.mymessageevent.emit({message:"No Permission"})
                          return false
                        }
                  } 
                  else 
                  {     
                      return true  
                  }
          }
          else
          { 
            return false  
          }
    }     
      else
      {
        localStorage.setItem(AC.data.mycomp,"1")
        this.router.navigateByUrl("admin/login")
        return false;
      }
  
  } 
}





           